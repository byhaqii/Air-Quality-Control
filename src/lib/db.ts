import mysql from 'mysql2/promise';

// Membuat connection pool agar koneksi database lebih stabil dan tidak kelebihan beban
const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;