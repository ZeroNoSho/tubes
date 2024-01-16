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
    if (profile.length === 0) {
      return NextResponse.json(
        { msg: "notfound" },
        {
          headers: {
            status: 400,
            "Content-Security-Policy-Report-Only":
              "default-src 'none'; img-src 'self'",
          },
        }
      );
    }

    return NextResponse.json(
      { profile },
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
