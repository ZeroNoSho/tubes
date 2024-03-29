import prisma from "../../../../../../lib/prisma";
import { NextResponse } from "next/server";
import { verifyJwt } from "@/app/api/middleware";

export async function POST(request) {
  const res = await request.json();
  // const accessToken = request.headers.get("authorization")?.split(" ")[1];
  // if (!accessToken || !verifyJwt(accessToken)) {
  //   return NextResponse.json(
  //     {
  //       message: "Unauthorized",
  //     },
  //     {
  //       status: 401,
  //     }
  //   );
  // }

  try {
    const prof = await prisma.profile.findMany({
      where: {
        userId: res.userId,
      },
    });

    await prisma.profile.create({
      data: {
        nomor: res.nomor,
        provinsi: res.provinsi,
        kota: res.kota,
        kecamatan: res.kecamatan,
        kodepos: parseInt(res.kodepos),
        alamat: res.alamat,
        userId: res.userId,
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
    return NextResponse.json(
      { msg: error },
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
