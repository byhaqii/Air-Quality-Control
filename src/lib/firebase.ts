import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWw83DGsRTb9PgwLibOofNkC4Tt5MTbtw",
  authDomain: "air-quality-control-201c0.firebaseapp.com",
  projectId: "air-quality-control-201c0",
  databaseURL: "https://air-quality-control-201c0-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "air-quality-control-201c0.firebasestorage.app",
  messagingSenderId: "304115318204",
  appId: "1:304115318204:web:78b317c6b7157f8c3b3fb9"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth }; 