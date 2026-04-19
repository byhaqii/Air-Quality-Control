import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    // 1. Menerima data JSON dari ESP32
    const body = await request.json();
    const { device_id, aqi, temperature, humidity } = body;

    // 2. Validasi sederhana: Pastikan semua data terkirim
    if (!device_id || aqi === undefined || temperature === undefined || humidity === undefined) {
      return NextResponse.json(
        { success: false, message: 'Data tidak lengkap. Pastikan mengirim device_id, aqi, temperature, dan humidity.' },
        { status: 400 }
      );
    }

    // 3. Menyimpan data ke tabel sensor_logs
    const [result] = await pool.query(
      'INSERT INTO sensor_logs (device_id, aqi, temperature, humidity) VALUES (?, ?, ?, ?)',
      [device_id, aqi, temperature, humidity]
    );

    // 4. Memberikan respon sukses ke ESP32
    return NextResponse.json(
      { success: true, message: 'Data sensor berhasil disimpan' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving sensor data:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan pada server saat menyimpan data' },
      { status: 500 }
    );
  }
}