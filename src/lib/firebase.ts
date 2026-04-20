import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; // 1. Sudah benar importnya

const firebaseConfig = {
  apiKey: "AIzaSyCWw83DGsRTb9PgwLibOofNkC4Tt5MTbtw",
  authDomain: "air-quality-control-201c0.firebaseapp.com",
  projectId: "air-quality-control-201c0",
  databaseURL: "https://air-quality-control-201c0-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "air-quality-control-201c0.firebasestorage.app",
  messagingSenderId: "304115318204",
  appId: "1:304115318204:web:78b317c6b7157f8c3b3fb9"
};

// Inisialisasi agar tidak terjadi error saat hot-reload di Next.js
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// 2. Inisialisasi layanan yang ingin digunakan
const db = getDatabase(app);
const auth = getAuth(app); // <--- TAMBAHKAN INI

// 3. Ekspor variabel agar bisa dipakai di file lain
export { db, auth }; // <--- PASTIKAN 'auth' MASUK DI SINI