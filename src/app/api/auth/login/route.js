import { db } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email dan Password wajib diisi" }, { status: 400 });
    }

    const userQuery = await db.collection("users")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (userQuery.empty) {
      return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
    }

    const userDoc = userQuery.docs[0];
    const userData = userDoc.data();

    if (userData.password !== password) {
      return NextResponse.json({ error: "Password salah!" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Login Berhasil",
      email: userData.email,
      role: userData.role
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}