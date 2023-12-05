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
    await prisma.product.create({
      data: {
        title: res.title,
        harga: res.harga,
        image: res.image,
        desc: res.desc,
        categoryid: res.categoryid,
      },
    });

    const product = await prisma.product.findMany();

    await Promise.all(
      res.categoryid.map(async (e) => {
        await prisma.category.update({
          where: {
            categoryid: e,
          },
          data: {
            productid: { push: [product[product.length - 1].productid] },
          },
        });
      })
    );

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
