import { db } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { uid } = await request.json();

    if (!uid) {
      return NextResponse.json({ error: "UID tidak ditemukan" }, { status: 400 });
    }

    const userDoc = await db.collection("users").doc(uid).get();

    if (!userDoc.exists) {
      return NextResponse.json({ error: "Data user tidak ditemukan di Firestore" }, { status: 404 });
    }

    const userData = userDoc.data();
    return NextResponse.json({ 
      role: userData.role,
      email: userData.email 
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}