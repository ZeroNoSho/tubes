import prisma from "../../../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const slug = params.slug; // 'a', 'b', or 'c'

  const product = await prisma.user.findMany({
    where: {
      id: slug,
    },
  });

  if (product.length === 0) {
    return NextResponse.json(
      { msg: "No data" },
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
    await prisma.user.delete({
      where: {
        id: slug,
      },
    });
    return NextResponse.json({ msg: "berhasil delet" });
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
