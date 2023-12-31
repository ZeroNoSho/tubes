import { verifyJwt } from "@/app/api/middleware";
import prisma from "../../../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const res = await request.json();
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
  const category = await prisma.category.findMany({
    where: {
      productid: { hasEvery: [slug] },
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

  try {
    await prisma.product.update({
      where: {
        productid: slug,
      },
      data: {
        title: res.title,
        harga: res.harga,
        image: res.image,
        desc: res.desc,
        categoryid: res.categoryid,
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

    await Promise.all(
      res.categoryid.map(async (e) => {
        await prisma.category.update({
          where: {
            categoryid: e,
          },
          data: {
            productid: {
              push: [product[0].productid],
            },
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
