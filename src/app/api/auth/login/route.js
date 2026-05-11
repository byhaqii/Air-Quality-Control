import { db } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Username dan Password wajib diisi" }, { status: 400 });
    }

    const userQuery = await db.collection("users")
      .where("username", "==", username)
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
      username: userData.username,
      role: userData.role,
    }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}