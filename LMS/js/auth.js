const Auth = (function () {
    let currentUser = null;
    let initPromise = null;
    let authReady = false;
    let localUsers = [];

    function generateUid() {
        return 'local_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
    }

    function hashPass(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        return 'h_' + Math.abs(hash).toString(36);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Mengambil data seluruh user yang terdaftar dari localStorage
    function loadFromStorage() {
        try {
            const raw = localStorage.getItem('lms_users');
            localUsers = raw ? JSON.parse(raw) : [];
        } catch (e) {
            localUsers = [];
        }
    }

    // Menyimpan kembali data seluruh user ke dalam localStorage
    function saveToStorage() {
        try {
            localStorage.setItem('lms_users', JSON.stringify(localUsers));
        } catch (e) {}
    }

    async function init() {
        if (initPromise) return initPromise;
        initPromise = (async () => {
            loadFromStorage();
            const saved = localStorage.getItem('lms_session');
            if (saved) {
                try {
                    currentUser = JSON.parse(saved);
                    authReady = true;
                    return currentUser;
                } catch (e) {}
            }
            authReady = true;
            return null;
        })();
        return initPromise;
    }

    function getUser() { return currentUser; }
    function isLoggedIn() { return currentUser !== null; }

    async function register(email, password, name, role) {
        if (!email || !password || !name || !role) {
            throw new Error('Semua field harus diisi');
        }
        if (!isValidEmail(email)) {
            throw new Error('Email tidak valid');
        }
        if (password.length < 6) {
            throw new Error('Password minimal 6 karakter');
        }

        if (localUsers.find(u => u.email === email)) {
            throw new Error('Email sudah terdaftar');
        }

        localUsers.push({
            uid: generateUid(),
            email,
            password: hashPass(password),
            name,
            role,
            createdAt: Date.now()
        });
        saveToStorage();
        currentUser = null;
        localStorage.removeItem('lms_session');
    }

    async function login(email, password) {
        if (!email || !password) {
            throw new Error('Email dan password harus diisi');
        }

        const found = localUsers.find(u => u.email === email && u.password === hashPass(password));
        if (!found) {
            throw new Error('Email atau password salah');
        }
        currentUser = { uid: found.uid, email: found.email, name: found.name, role: found.role };
        localStorage.setItem('lms_session', JSON.stringify(currentUser));
        return currentUser;
    }

    async function logout() {
        currentUser = null;
        localStorage.removeItem('lms_session');
    }

    function createSeedUser(email, password, name, role, uid) {
        loadFromStorage();
        if (localUsers.find(u => u.email === email)) return;
        localUsers.push({ uid, email, password: hashPass(password), name, role, createdAt: Date.now() });
        saveToStorage();
    }

    return { init, getUser, isLoggedIn, register, login, logout, createSeedUser };
})();
