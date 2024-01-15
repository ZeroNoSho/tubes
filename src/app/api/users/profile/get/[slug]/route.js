import prisma from "../../../../../../../lib/prisma";
import { NextResponse } from "next/server";
import { verifyJwt } from "@/app/api/middleware";

export async function GET(request, { params }) {
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
    const profile = await prisma.profile.findMany({
      where: {
        userId: slug,
      },
      include: {
        cart: {
          include: {
            product: true,
          },
        },
      },
    });
    let totalQuantity = 0;
    let totalPrice = 0;
    profile[0].cart.forEach((cart) => {
      totalQuantity += cart.total;

      // Menggunakan perulangan karena setiap objek cart dapat memiliki beberapa produk
      cart.product.forEach((product) => {
        totalPrice += product.harga * cart.total;
      });
    });

    return NextResponse.json(
      { profile, totalQuantity, totalPrice },
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
