import prisma from "../../../../../../lib/prisma";
import { NextResponse } from "next/server";
import { verifyJwt } from "@/app/api/middleware";
import { cloudinary } from "@/app/api/utils";

export async function POST(request) {
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

  // Return "https" URLs by setting secure: true

  try {
    const formData = await request.formData();
    const title = formData.get("title");
    const harga = formData.get("harga");
    const desc = formData.get("desc");
    const categoryidex = formData.get("categoryid");
    const categoryid = JSON.parse(categoryidex);

    const uploadResponse = await fetch(
      "https://api.cloudinary.com/v1_1/davjj74mu/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const uploadedImageData = await uploadResponse.json();
    const imageUrl = uploadedImageData.secure_url;
    const public_id = uploadedImageData.public_id;
    const signature = uploadedImageData.signature;

    await prisma.product.create({
      data: {
        title: title,
        harga: parseInt(harga),
        image: imageUrl,
        public_id: public_id,
        signature: signature,
        desc: desc,
        categoryid: categoryid,
      },
    });

    const product = await prisma.product.findMany();

    await Promise.all(
      categoryid.map(async (e) => {
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
