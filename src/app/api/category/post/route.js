import prisma from "../../../../../lib/prisma";
import { NextResponse } from "next/server";
import { verifyJwt } from "../../middleware";

export async function POST(request) {
  const res = await request.json();
  const accessToken = request.headers.get("authorization")?.split(" ")[1];
  if (!accessToken || !verifyJwt(accessToken)) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const category = await prisma.category.findMany({
    where: {
      title: res.title,
    },
  });
  if (category) {
    return NextResponse.json(
      { msg: "sudah ada" },
      {
        headers: {
          status: 400,
          "Content-Security-Policy-Report-Only":
            "default-src 'none'; img-src 'self'",
        },
      }
    );
  }
  try {
    await prisma.category.create({
      data: {
        title: res.title,
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
