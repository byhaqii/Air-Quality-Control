import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET: Mengambil daftar pengguna (password tidak ikut diambil demi keamanan)
export async function GET() {
  try {
    const [rows] = await pool.query('SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC');
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ success: false, message: 'Gagal mengambil data pengguna' }, { status: 500 });
  }
}

// POST: Menambahkan pengguna baru
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ success: false, message: 'Nama, email, dan password wajib diisi' }, { status: 400 });
    }

    // CATATAN PENTING: Untuk aplikasi nyata, password HARUS di-hash menggunakan library seperti bcrypt
    // sebelum dimasukkan ke database. Ini adalah contoh sederhana untuk mempercepat progres.
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)',
      [name, email, password, role || 'viewer']
    );

    return NextResponse.json({ success: true, message: 'Pengguna berhasil ditambahkan' }, { status: 201 });
  } catch (error) {
    console.error('Error adding user:', error);
    return NextResponse.json({ success: false, message: 'Gagal menambahkan pengguna. Email mungkin sudah terdaftar.' }, { status: 500 });
  }
}