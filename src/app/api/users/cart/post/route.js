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

  try {
    const cart = await prisma.cart.findMany({
      where: {
        ProfileId: res.ProfileId,
      },
    });


    for (const e of cart) {
      if (e.productId[0] === res.productId) {
        try {
          await prisma.cart.update({
            where: {
              cartid: e.cartid,
            },
            data: {
              total: res.total + e.total,
            },
          });
          // Assuming NextResponse is a function to send a response
          return NextResponse.json(
            { msg: "berhasil2" },
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
    }

    await prisma.cart.create({
      data: {
        total: res.total,
        ProfileId: res.ProfileId,
        productId: [res.productId],
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
    return NextResponse.json(
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
