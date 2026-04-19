import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET: Mengambil daftar semua perangkat untuk ditampilkan di devices-grid.tsx
export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM devices ORDER BY created_at DESC');
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching devices:', error);
    return NextResponse.json({ success: false, message: 'Gagal mengambil data perangkat' }, { status: 500 });
  }
}

// POST: Menambahkan perangkat ESP32 baru ke dalam sistem
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { device_name, mac_address, location } = body;

    if (!device_name) {
      return NextResponse.json({ success: false, message: 'Nama perangkat wajib diisi' }, { status: 400 });
    }

    const [result] = await pool.query(
      'INSERT INTO devices (device_name, mac_address, location, status) VALUES (?, ?, ?, ?)',
      [device_name, mac_address, location, 'offline'] // Default status saat pertama kali ditambahkan
    );

    return NextResponse.json({ success: true, message: 'Perangkat berhasil ditambahkan' }, { status: 201 });
  } catch (error) {
    console.error('Error adding device:', error);
    return NextResponse.json({ success: false, message: 'Gagal menambahkan perangkat' }, { status: 500 });
  }
}