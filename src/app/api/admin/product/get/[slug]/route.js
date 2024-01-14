import prisma from "../../../../../../../lib/prisma";
import { verifyJwt } from "@/app/api/middleware";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const slug = params.slug;
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
    console.log(slug);
    const product = await prisma.product.findMany({
      where: {
        productid: slug,
      },
      include: {
        categorys: {
          include: {
            products: true,
          },
        },
      },
    });

    return NextResponse.json(
      { product },
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
