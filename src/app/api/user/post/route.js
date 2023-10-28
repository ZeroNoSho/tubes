import prisma from "../../../../../lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const res = await request.json();
  if (res.password !== res.confpass) {
    return NextResponse.status(400).json({
      msg: "password tidak sama dengan confirm",
    });
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(res.password, salt);

  try {
    await prisma.user.create({
      data: {
        name: res.name,
        email: res.email,
        password: hashPassword,
        role: res.role,
        refresh_token: "",
      },
    });

    return NextResponse.json(
      { msg: "berhasil" },
      {
        headers: {
          status: 200,
          "Content-Security-Policy-Report-Only":
            "default-src 'none'; img-src 'self'",
        },
      }
    );
  } catch (error) {
    NextResponse.json(
      { msg: "error" },
      {
        headers: {
          status: 400,
          "Content-Security-Policy-Report-Only":
            "default-src 'none'; img-src 'self'",
        },
      }
    );
  }
}
