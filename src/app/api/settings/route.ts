import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET: Mengambil nilai ambang batas saat ini
export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM alert_settings');
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ success: false, message: 'Gagal mengambil pengaturan' }, { status: 500 });
  }
}

// PUT: Memperbarui nilai ambang batas (contoh: mengubah max_aqi dari 100 ke 150)
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { parameter_name, threshold_value } = body;

    if (!parameter_name || threshold_value === undefined) {
      return NextResponse.json({ success: false, message: 'Parameter dan nilai wajib diisi' }, { status: 400 });
    }

    await pool.query(
      'UPDATE alert_settings SET threshold_value = ? WHERE parameter_name = ?',
      [threshold_value, parameter_name]
    );

    return NextResponse.json({ success: true, message: 'Pengaturan berhasil diperbarui' });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json({ success: false, message: 'Gagal memperbarui pengaturan' }, { status: 500 });
  }
}