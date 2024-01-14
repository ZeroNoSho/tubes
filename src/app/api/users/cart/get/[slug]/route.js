import prisma from "../../../../../../../lib/prisma";
import { NextResponse } from "next/server";
// import { verifyJwt } from "@/app/api/middleware";

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
    const cart = await prisma.cart.findMany({
      where: {
        ProfileId: slug,
      },
      include: {
        product: true,
      },
    });

    return NextResponse.json(
      { cart: cart },
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
