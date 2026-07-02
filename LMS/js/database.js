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
                        const newId = await idbAdd(storeName, fbData);
                        fbData.id = newId;
                        data[storeName].push(fbData);
                        changed = true;
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

    async function seedFromDataJson() {
        const seeded = await idbGetMeta('seeded');
        if (seeded) return;
        const existCourses = await idbAll('courses');
        const existQuestions = await idbAll('questions');
        if (existCourses.length > 0 && existQuestions.length > 0) return;
        let courses = [], questions = [];
        try {
            const res = await fetch('./data.json');
            const data = await res.json();
            courses = Array.isArray(data) ? data : (data.courses || []);
            questions = data.questions || [];
        } catch (e) {
            console.warn('Gagal muat data.json, pake seed bawaan:', e);
            courses = [
                { id: 'seed_c1', title: 'Pemrograman Web Dasar', desc: 'Belajar HTML, CSS, dan JavaScript untuk pemula.', author: 'Yogi', ownerId: 'system', file: null, done: false, updatedAt: Date.now() },
                { id: 'seed_c2', title: 'Basis Data Lanjutan', desc: 'Konsep JOIN, indexing, dan optimasi query SQL.', author: 'Yogi', ownerId: 'system', file: null, done: false, updatedAt: Date.now() }
            ];
            questions = [
                { id: 'seed_q1', q: 'Apa singkatan dari HTML?', a: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'HyperTransfer Markup Logic'], correct: 0, author: 'Yogi', ownerId: 'system', updatedAt: Date.now() },
                { id: 'seed_q2', q: 'CSS digunakan untuk...', a: ['Membuat struktur halaman', 'Mempercantik tampilan web', 'Menangani logika server', 'Menyimpan data'], correct: 1, author: 'Yogi', ownerId: 'system', updatedAt: Date.now() },
                { id: 'seed_q3', q: 'Function dalam JavaScript dideklarasikan dengan keyword...', a: ['func', 'define', 'function', 'def'], correct: 2, author: 'Yogi', ownerId: 'system', updatedAt: Date.now() },
                { id: 'seed_q4', q: 'Perintah untuk menampilkan data di console JavaScript?', a: ['print()', 'echo()', 'console.log()', 'write()'], correct: 2, author: 'Yogi', ownerId: 'system', updatedAt: Date.now() },
                { id: 'seed_q5', q: 'Apa fungsi dari tag &lt;a&gt; dalam HTML?', a: ['Membuat tabel', 'Membuat link', 'Menyisipkan gambar', 'Membuat form'], correct: 1, author: 'Yogi', ownerId: 'system', updatedAt: Date.now() },
                { id: 'seed_q6', q: 'Database relationa menggunakan struktur...', a: ['Tree', 'Graph', 'Table', 'List'], correct: 2, author: 'Yogi', ownerId: 'system', updatedAt: Date.now() },
                { id: 'seed_q7', q: 'Apa kepanjangan dari SQL?', a: ['Structured Query Language', 'Simple Query Logic', 'Standard Question Language', 'Sequential Query Listing'], correct: 0, author: 'Yogi', ownerId: 'system', updatedAt: Date.now() },
                { id: 'seed_q8', q: 'Method HTTP mana yang digunakan untuk mengirim data form?', a: ['GET', 'POST', 'PUT', 'DELETE'], correct: 1, author: 'Yogi', ownerId: 'system', updatedAt: Date.now() },
                { id: 'seed_q9', q: 'Index dalam database digunakan untuk...', a: ['Mempercepat pencarian', 'Menyimpan cadangan', 'Mengenkripsi data', 'Membuat relasi'], correct: 0, author: 'Yogi', ownerId: 'system', updatedAt: Date.now() },
                { id: 'seed_q10', q: 'Apa yang dimaksud dengan DOM?', a: ['Document Object Model', 'Data Object Management', 'Digital Output Module', 'Dynamic Online Memory'], correct: 0, author: 'Yogi', ownerId: 'system', updatedAt: Date.now() }
            ];
        }

        for (const item of courses) {
            if (!item.author) item.author = 'Admin';
            item.ownerId = item.ownerId || 'system';
            item.updatedAt = Date.now();
            try { await idbAdd('courses', item); } catch (e) { await idbPut('courses', item); }
        }
        for (const item of questions) {
            if (!item.author) item.author = 'Admin';
            item.ownerId = item.ownerId || 'system';
            item.updatedAt = Date.now();
            try { await idbAdd('questions', item); } catch (e) { await idbPut('questions', item); }
        }
        await idbSetMeta('seeded', true);
        console.log(`Seed data dimuat: ${courses.length} materi, ${questions.length} soal`);
    }

    async function init() {
        if (readyPromise) return readyPromise;

        readyPromise = (async () => {
            idb = await openIDB();
            await migrateFromLocalStorage();
            await seedFromDataJson();
            await loadAllFromIDB();

            if (initFirebase()) {
                await pullFromFirebase('courses', 'courses');
                await pullFromFirebase('questions', 'questions');
                await pullFromFirebase('scores', 'scores');
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
