import prisma from "../../../../../../../lib/prisma";
import { NextResponse } from "next/server";
// import { verifyJwt } from "@/app/api/middleware";

export async function PATCH(request, { params }) {
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
    const slug = params.slug;
    const res = await request.json();
    const cart = await prisma.cart.findMany({
      where: {
        cartid: slug,
      },
    });

    if (cart.length === 0) {
      return NextResponse.json(
        { msg: "No data" },
        {
          headers: {
            status: 404,
            "Content-Security-Policy-Report-Only":
              "default-src 'none'; img-src 'self'",
          },
        }
      );
    }

    await prisma.cart.update({
      where: {
        cartid: slug,
      },
      data: {
        total: res.total,
      },
    });

    return NextResponse.json(
      { msg: "berhasil update" },
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
