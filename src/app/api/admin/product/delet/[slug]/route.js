import { verifyJwt } from "@/app/api/middleware";
import prisma from "../../../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
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

  const product = await prisma.product.findMany({
    where: {
      productid: slug,
    },
  });

  if (product.length === 0) {
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

  const category = await prisma.category.findMany({
    where: {
      productid: { hasEvery: [slug] },
    },
  });

  try {
    await prisma.product.delete({
      where: {
        productid: slug,
      },
    });

    await Promise.all(
      category.map(async (e) => {
        await prisma.category.update({
          where: {
            categoryid: e.categoryid,
          },
          data: {
            productid: {
              set: e.productid.filter((id) => id !== slug),
            },
          },
        });
      })
    );

    return NextResponse.json(
      { msg: "berhasil menghapus" },
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
