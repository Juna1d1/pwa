const Database = (function () {
    const DB_NAME = 'lms_app';
    const DB_VERSION = 1;

    let idb = null;
    let data = { courses: [], questions: [], scores: [] };
    let user = null;
    let isFirebaseReady = false;
    let firestore = null;
    let unsubscribeFns = [];
    let onChangeCallbacks = [];
    let readyPromise = null;

    function openIDB() {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(DB_NAME, DB_VERSION);
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                ['courses', 'questions', 'scores', 'meta'].forEach(store => {
                    if (!db.objectStoreNames.contains(store)) {
                        db.createObjectStore(store, { keyPath: 'id', autoIncrement: true });
                    }
                });
            };
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    function idbAll(store) {
        return new Promise((resolve, reject) => {
            const tx = idb.transaction(store, 'readonly');
            const req = tx.objectStore(store).getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    function idbAdd(store, item) {
        return new Promise((resolve, reject) => {
            const tx = idb.transaction(store, 'readwrite');
            const req = tx.objectStore(store).add(item);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    function idbPut(store, item) {
        return new Promise((resolve, reject) => {
            const tx = idb.transaction(store, 'readwrite');
            const req = tx.objectStore(store).put(item);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    function idbDelete(store, id) {
        return new Promise((resolve, reject) => {
            const tx = idb.transaction(store, 'readwrite');
            const req = tx.objectStore(store).delete(id);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    function idbClear(store) {
        return new Promise((resolve, reject) => {
            const tx = idb.transaction(store, 'readwrite');
            const req = tx.objectStore(store).clear();
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    function idbGetMeta(key) {
        return new Promise((resolve, reject) => {
            const tx = idb.transaction('meta', 'readonly');
            const req = tx.objectStore('meta').get(key);
            req.onsuccess = () => resolve(req.result ? req.result.value : null);
            req.onerror = () => reject(req.error);
        });
    }

    function idbSetMeta(key, value) {
        return new Promise((resolve, reject) => {
            const tx = idb.transaction('meta', 'readwrite');
            const req = tx.objectStore('meta').put({ id: key, value });
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    function notifyChange() {
        onChangeCallbacks.forEach(cb => cb());
    }

    async function loadAllFromIDB() {
        data.courses = await idbAll('courses');
        data.questions = await idbAll('questions');
        data.scores = await idbAll('scores');
        // Dedup by id (Firebase real-time bisa bikin dobel)
        data.courses = data.courses.filter((c, i, arr) => arr.findIndex(x => String(x.id) === String(c.id)) === i);
        data.questions = data.questions.filter((q, i, arr) => arr.findIndex(x => String(x.id) === String(q.id)) === i);
        const savedUser = await idbGetMeta('user');
        user = savedUser;
    }

    async function migrateFromLocalStorage() {
        const lsData = localStorage.getItem('lms_data');
        const lsQuiz = localStorage.getItem('quiz_data');
        const lsScores = localStorage.getItem('quiz_scores');
        const lsUser = localStorage.getItem('user');
        const migrated = await idbGetMeta('migrated');

        if (migrated) return;

        if (lsData) {
            const items = JSON.parse(lsData);
            for (const item of items) {
                if (!item.author) item.author = 'Admin';
                item.updatedAt = Date.now();
                await idbAdd('courses', item);
            }
        }
        if (lsQuiz) {
            const items = JSON.parse(lsQuiz);
            for (const item of items) {
                item.updatedAt = Date.now();
                await idbAdd('questions', item);
            }
        }
        if (lsScores) {
            const items = JSON.parse(lsScores);
            for (const item of items) {
                await idbAdd('scores', item);
            }
        }
        if (lsUser) {
            await idbSetMeta('user', JSON.parse(lsUser));
        }

        await idbSetMeta('migrated', true);
        console.log('Migrasi dari localStorage ke IndexedDB berhasil');
    }

    function initFirebase() {
        if (typeof firebase === 'undefined' || !window.FIREBASE_CONFIG) {
            console.log('Firebase tidak dikonfigurasi — berjalan offline');
            return false;
        }
        try {
            if (firebase.apps.length === 0) {
                firebase.initializeApp(window.FIREBASE_CONFIG);
            }
            firestore = firebase.firestore();
            firestore.settings({ merge: true });
            firestore.enablePersistence().catch(() => {});
            isFirebaseReady = true;
            console.log('Firebase siap — real-time sync aktif');
            return true;
        } catch (e) {
            console.error('Firebase gagal:', e);
            return false;
        }
    }

    async function pullFromFirebase(collection, storeName) {
        if (!isFirebaseReady) return;
        try {
            const snap = await firestore.collection(collection).orderBy('updatedAt', 'desc').get();
            for (const doc of snap.docs) {
                const fbItem = { firebaseId: doc.id, ...doc.data() };
                const local = data[storeName].find(d => d.firebaseId === doc.id);
                if (local) {
                    if ((fbItem.updatedAt || 0) > (local.updatedAt || 0)) {
                        Object.assign(local, fbItem, { id: local.id });
                        await idbPut(storeName, local);
                    }
                } else {
                    const newId = await idbAdd(storeName, fbItem);
                    fbItem.id = newId;
                    data[storeName].push(fbItem);
                }
            }
        } catch (e) {
            console.warn('Pull dari Firebase gagal untuk', collection, e);
        }
    }

    function subscribeFirebase(collection, storeName) {
        if (!isFirebaseReady) return;
        const unsub = firestore.collection(collection).orderBy('updatedAt', 'asc').onSnapshot(async (snap) => {
            let changed = false;
            for (const change of snap.docChanges()) {
                const fbData = { firebaseId: change.doc.id, ...change.doc.data() };
                const localIdx = data[storeName].findIndex(d => d.firebaseId === change.doc.id);

                if (change.type === 'removed') {
                    if (localIdx !== -1) {
                        await idbDelete(storeName, data[storeName][localIdx].id);
                        data[storeName].splice(localIdx, 1);
                        changed = true;
                    }
                } else if (change.type === 'added' || change.type === 'modified') {
                    if (localIdx === -1) {
                        // Double check by local id (Firebase doc id might match local doc id)
                        const localById = data[storeName].findIndex(d => String(d.id) === String(change.doc.id));
                        if (localById === -1) {
                            const newId = await idbAdd(storeName, fbData);
                            fbData.id = newId;
                            data[storeName].push(fbData);
                            changed = true;
                        } else {
                            // Update firebaseId on existing local item
                            const local = data[storeName][localById];
                            local.firebaseId = change.doc.id;
                            await idbPut(storeName, local);
                        }
                    } else {
                        const local = data[storeName][localIdx];
                        if ((fbData.updatedAt || 0) > (local.updatedAt || 0)) {
                            Object.assign(local, fbData, { id: local.id });
                            await idbPut(storeName, local);
                            changed = true;
                        }
                    }
                }
            }
            if (changed) notifyChange();
        });
        unsubscribeFns.push(unsub);
    }

    async function pushToFirebase(collection, item) {
        if (!isFirebaseReady) return;
        try {
            const { id, firebaseId, ...dataToSend } = item;
            if (firebaseId) {
                await firestore.collection(collection).doc(firebaseId).set(dataToSend, { merge: true });
            } else {
                const ref = await firestore.collection(collection).add(dataToSend);
                item.firebaseId = ref.id;
                await idbPut(
                    collection === 'courses' ? 'courses' :
                    collection === 'questions' ? 'questions' : 'scores',
                    item
                );
            }
        } catch (e) {
            console.warn('Push ke Firebase gagal untuk', collection, e);
        }
    }

    async function deleteFromFirebase(collection, item) {
        if (!isFirebaseReady || !item.firebaseId) return;
        try {
            await firestore.collection(collection).doc(item.firebaseId).delete();
        } catch (e) {
            console.warn('Hapus dari Firebase gagal', e);
        }
    }

    async function clearFirebaseCollection(collection) {
        if (!isFirebaseReady) return;
        try {
            const snap = await firestore.collection(collection).get();
            if (snap.empty) return;
            const batch = firestore.batch();
            snap.docs.forEach(doc => batch.delete(doc.ref));
            await batch.commit();
            console.log(`Firebase collection '${collection}' dibersihkan (${snap.size} dokumen)`);
        } catch (e) {
            console.warn('Gagal clear Firebase collection', collection, e);
        }
    }

    async function seedFromDataJson() {
        const SEED_VERSION = 4;
        const lastVersion = await idbGetMeta('seed_version');
        console.log('[SEED] lastVersion=' + lastVersion + ', SEED_VERSION=' + SEED_VERSION);
        if (lastVersion === SEED_VERSION) { console.log('[SEED] SKIP — versi sama'); return false; }

        const hasOldData = (await idbAll('courses')).length > 0;
        console.log('[SEED] hasOldData=' + hasOldData);
        if (lastVersion || hasOldData) {
            console.log('[SEED] Bersihkan store...');
            await idbClear('courses');
            await idbClear('questions');
            console.log('[SEED] Store dibersihkan');
        }

        const SEED_DOSEN_UID = 'seed_dosen';
        Auth.createSeedUser('dosen@lms.test', 'dosen123', 'Dr. Rizky Pratama, S.Kom., M.Kom.', 'admin', SEED_DOSEN_UID);
        console.log('[SEED] Seed user created');

        let courses = [], questions = [];
        try {
            console.log('[SEED] Fetch data.json...');
            const res = await fetch('./data.json');
            const data = await res.json();
            courses = Array.isArray(data) ? data : (data.courses || []);
            questions = data.questions || [];
            console.log('[SEED] data.json OK: courses=' + courses.length + ', questions=' + questions.length);
            if (courses.length) console.log('[SEED] course ids:', courses.map(c => ({ id: c.id, typeof: typeof c.id })));
        } catch (e) {
            console.warn('[SEED] Gagal data.json:', e);
            courses = [
                {
                    id: 'seed_c1', title: 'Pemrograman Web Modern',
                    desc: 'Materi ini membahas fundamental pengembangan web modern menggunakan HTML5, CSS3, dan JavaScript. Anda akan mempelajari cara membangun halaman web responsif dengan struktur semantic HTML, styling lanjutan dengan CSS Flexbox dan Grid, serta interaktivitas menggunakan DOM manipulation. Topik mencakup: semantic HTML, responsive design, CSS animations, ES6+ JavaScript, event handling, dan dasar-dasar REST API. Cocok untuk pemula yang ingin memulai karir sebagai web developer.',
                    category: 'Pemrograman', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, file: null, done: false, updatedAt: Date.now()
                },
                {
                    id: 'seed_c2', title: 'Sistem Basis Data Relasional',
                    desc: 'Materi komprehensif tentang perancangan dan implementasi basis data relasional. Dipelajari: konsep Entity Relationship Diagram (ERD), normalisasi database hingga 3NF, bahasa SQL (DDL, DML, DCL), join tables, indexing untuk optimasi query, transaction processing, dan Stored Procedure. Studi kasus menggunakan MySQL/MariaDB. Materi ini penting bagi mahasiswa yang ingin menguasai pengelolaan data skala kecil hingga enterprise.',
                    category: 'Database', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, file: null, done: false, updatedAt: Date.now()
                },
                {
                    id: 'seed_c3', title: 'Jaringan & Keamanan Komputer',
                    desc: 'Materi ini mencakup konsep fundamental jaringan komputer dan keamanan siber. Pembahasan meliputi: model OSI Layer dan TCP/IP, topologi jaringan, perangkat jaringan (router, switch, firewall), subnetting IP address, protokol HTTP/HTTPS/DNS/DHCP, konsep VPN dan tunneling, enkripsi data, serangan umum (DDoS, SQL Injection, XSS), serta praktik secure coding. Dibekali dengan simulasi menggunakan Cisco Packet Tracer.',
                    category: 'Jaringan', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, file: null, done: false, updatedAt: Date.now()
                }
            ];
            questions = [
                // Course 1: Pemrograman Web Modern (5 soal)
                { id: 'seed_q1', q: 'Tag HTML apa yang digunakan untuk membuat paragraf?', a: ['&lt;paragraph&gt;', '&lt;p&gt;', '&lt;text&gt;', '&lt;div&gt;'], correct: 1, courseId: 'seed_c1', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q2', q: 'CSS Flexbox digunakan untuk...', a: ['Membuat animasi 3D', 'Mengatur tata letak elemen secara fleksibel', 'Menyimpan data di browser', 'Memvalidasi input form'], correct: 1, courseId: 'seed_c1', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q3', q: 'Method Array di JavaScript yang digunakan untuk mengiterasi setiap elemen adalah...', a: ['map()', 'forEach()', 'filter()', 'reduce()'], correct: 1, courseId: 'seed_c1', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q4', q: 'Apa kepanjangan dari DOM dalam JavaScript?', a: ['Document Object Model', 'Data Orientation Model', 'Digital Output Management', 'Dynamic Object Mapping'], correct: 0, courseId: 'seed_c1', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q5', q: 'HTTP method mana yang umum digunakan untuk mengirim data dari form HTML?', a: ['GET', 'POST', 'PUT', 'DELETE'], correct: 1, courseId: 'seed_c1', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                // Course 2: Sistem Basis Data Relasional (5 soal)
                { id: 'seed_q6', q: 'Perintah SQL untuk mengambil data dari tabel adalah...', a: ['GET', 'SELECT', 'FETCH', 'RETRIEVE'], correct: 1, courseId: 'seed_c2', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q7', q: 'Bentuk normal ketiga (3NF) mensyaratkan...', a: ['Tidak ada atribut yang bergantung pada primary key', 'Tidak ada atribut non-key yang bergantung transitif pada candidate key', 'Semua atribut harus bernilai atomik', 'Harus memiliki foreign key'], correct: 1, courseId: 'seed_c2', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q8', q: 'Jenis JOIN yang mengembalikan semua record dari kedua tabel adalah...', a: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'], correct: 3, courseId: 'seed_c2', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q9', q: 'Index dalam database berfungsi untuk...', a: ['Mempercepat pencarian data', 'Mengenkripsi data', 'Membuat backup otomatis', 'Menormalkan tabel'], correct: 0, courseId: 'seed_c2', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q10', q: 'Perintah DDL (Data Definition Language) adalah...', a: ['INSERT, UPDATE, DELETE', 'SELECT, JOIN, UNION', 'CREATE, ALTER, DROP', 'GRANT, REVOKE, COMMIT'], correct: 2, courseId: 'seed_c2', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                // Course 3: Jaringan & Keamanan Komputer (5 soal)
                { id: 'seed_q11', q: 'Model referensi yang terdiri dari 7 lapisan adalah...', a: ['TCP/IP', 'OSI Layer', 'DNS Model', 'HTTP Protocol'], correct: 1, courseId: 'seed_c3', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q12', q: 'Protokol yang digunakan untuk mengubah alamat domain menjadi IP address adalah...', a: ['DHCP', 'DNS', 'HTTP', 'FTP'], correct: 1, courseId: 'seed_c3', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q13', q: 'Jenis serangan yang menyisipkan perintah SQL ke dalam input pengguna disebut...', a: ['DDoS', 'SQL Injection', 'Phishing', 'Man-in-the-Middle'], correct: 1, courseId: 'seed_c3', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q14', q: 'Perangkat jaringan yang berfungsi menghubungkan dua jaringan berbeda adalah...', a: ['Switch', 'Hub', 'Router', 'Repeater'], correct: 2, courseId: 'seed_c3', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() },
                { id: 'seed_q15', q: 'Teknik enkripsi yang menggunakan sepasang kunci publik dan privat disebut...', a: ['Symmetric Encryption', 'Asymmetric Encryption', 'Hashing', 'Base64 Encoding'], correct: 1, courseId: 'seed_c3', author: 'Dr. Rizky Pratama, S.Kom., M.Kom.', ownerId: SEED_DOSEN_UID, updatedAt: Date.now() }
            ];
        }

        for (const item of courses) {
            if (!item.author) item.author = 'Admin';
            item.ownerId = item.ownerId || 'system';
            item.updatedAt = Date.now();
            if (!item.id) item.id = 'c_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 6);
            item.id = String(item.id);
            await idbPut('courses', item);
        }
        const storedCourses = await idbAll('courses');
        console.log('[SEED] Course di IDB setelah seed:', storedCourses.map(c => ({ id: c.id, typeof: typeof c.id, title: c.title })));
        for (const item of questions) {
            if (!item.author) item.author = 'Admin';
            item.ownerId = item.ownerId || 'system';
            item.updatedAt = Date.now();
            if (!item.id) item.id = 'q_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 6);
            item.id = String(item.id);
            await idbPut('questions', item);
        }
        await idbSetMeta('seed_version', SEED_VERSION);
        console.log(`[SEED] Selesai: ${courses.length} materi, ${questions.length} soal`);
        return true;
    }

    async function init() {
        if (readyPromise) return readyPromise;

        readyPromise = (async () => {
            idb = await openIDB();
            await migrateFromLocalStorage();
            const didSeed = await seedFromDataJson();
            await loadAllFromIDB();

            if (initFirebase()) {
                if (didSeed) {
                    // Fresh seed — clear old Firebase data & push new
                    await clearFirebaseCollection('courses');
                    await clearFirebaseCollection('questions');
                    for (const c of data.courses) {
                        const { id, firebaseId: _fb, ...rest } = c;
                        const ref = firestore.collection('courses').doc(String(c.id));
                        await ref.set(rest);
                        c.firebaseId = String(c.id);
                        await idbPut('courses', c);
                    }
                    for (const q of data.questions) {
                        const { id, firebaseId: _fb, ...rest } = q;
                        const ref = firestore.collection('questions').doc(String(q.id));
                        await ref.set(rest);
                        q.firebaseId = String(q.id);
                        await idbPut('questions', q);
                    }
                    await loadAllFromIDB();
                } else {
                    await pullFromFirebase('courses', 'courses');
                    await pullFromFirebase('questions', 'questions');
                    await pullFromFirebase('scores', 'scores');
                }
                subscribeFirebase('courses', 'courses');
                subscribeFirebase('questions', 'questions');
            }

            console.log(`Database siap: ${data.courses.length} materi, ${data.questions.length} soal`);
        })();

        return readyPromise;
    }

    function onDataChange(cb) {
        onChangeCallbacks.push(cb);
        return () => {
            onChangeCallbacks = onChangeCallbacks.filter(fn => fn !== cb);
        };
    }

    function destroy() {
        unsubscribeFns.forEach(fn => fn());
        unsubscribeFns = [];
        if (idb) idb.close();
    }

    function getCourses() { return data.courses; }
    function getQuestions() { return data.questions; }
    function getScores() { return data.scores; }
    function getUser() { return user; }

    async function saveCourse(course) {
        course.updatedAt = Date.now();
        if (course.id) {
            const idx = data.courses.findIndex(c => String(c.id) === String(course.id));
            if (idx !== -1) {
                Object.assign(data.courses[idx], course);
                await idbPut('courses', data.courses[idx]);
                await pushToFirebase('courses', data.courses[idx]);
            }
        } else {
            const newId = await idbAdd('courses', course);
            course.id = newId;
            data.courses.push(course);
            await pushToFirebase('courses', course);
        }
        notifyChange();
    }

    async function deleteCourse(id) {
        const idx = data.courses.findIndex(c => String(c.id) === String(id));
        if (idx === -1) return;
        const item = data.courses[idx];
        await deleteFromFirebase('courses', item);
        await idbDelete('courses', id);
        data.courses.splice(idx, 1);
        notifyChange();
    }

    async function toggleCourseDone(id) {
        const item = data.courses.find(c => String(c.id) === String(id));
        if (!item) return;
        item.done = !item.done;
        item.updatedAt = Date.now();
        await idbPut('courses', item);
        await pushToFirebase('courses', item);
        notifyChange();
    }

    async function saveQuestion(q) {
        q.updatedAt = Date.now();
        if (q.id) {
            const idx = data.questions.findIndex(x => String(x.id) === String(q.id));
            if (idx !== -1) {
                Object.assign(data.questions[idx], q);
                await idbPut('questions', data.questions[idx]);
                await pushToFirebase('questions', data.questions[idx]);
            }
        } else {
            const newId = await idbAdd('questions', q);
            q.id = newId;
            data.questions.push(q);
            await pushToFirebase('questions', q);
        }
        notifyChange();
    }

    async function deleteQuestion(id) {
        const idx = data.questions.findIndex(x => String(x.id) === String(id));
        if (idx === -1) return;
        const item = data.questions[idx];
        await deleteFromFirebase('questions', item);
        await idbDelete('questions', id);
        data.questions.splice(idx, 1);
        notifyChange();
    }

    async function addScore(score) {
        const entry = { ...score, createdAt: Date.now() };
        const newId = await idbAdd('scores', entry);
        entry.id = newId;
        data.scores.push(entry);
        await pushToFirebase('scores', entry);
        notifyChange();
    }

    async function setUser(u) {
        user = u;
        await idbSetMeta('user', u);
    }

    // Expose internal DB for auth module
    async function __getDb() {
        if (!idb) idb = await openIDB();
        return idb;
    }

    return {
        init, destroy, onDataChange, __getDb,
        getCourses, getQuestions, getScores, getUser,
        saveCourse, deleteCourse, toggleCourseDone,
        saveQuestion, deleteQuestion, addScore, setUser
    };
})();
