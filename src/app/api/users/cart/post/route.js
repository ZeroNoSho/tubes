import prisma from "../../../../../../lib/prisma";
import { NextResponse } from "next/server";

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

  const cart = await prisma.cart.findMany({
    where: {
      productId: res.productId,
    },
  });

  if (cart.length !== 0) {
    try {
      await prisma.cart.update({
        where: {
          id: cart[0].id,
        },
        data: {
          total: res.total + cart[0].total,
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
    } catch (error) {}
  }

  try {
    await prisma.cart.create({
      data: {
        total: res.total,
        userId: res.userId,
        productId: res.productId,
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
