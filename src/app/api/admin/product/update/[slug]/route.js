import { verifyJwt } from "@/app/api/middleware";
import prisma from "../../../../../../../lib/prisma";
import { NextResponse } from "next/server";
import { cloudinary } from "@/app/api/utils";

export async function PATCH(request, { params }) {
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
    const formData = await request.formData();
    const title = formData.get("title");
    const harga = formData.get("harga");
    const desc = formData.get("desc");
    const categoryidex = formData.get("categoryid");
    const categoryid = JSON.parse(categoryidex);
    formData.append("upload_preset", "llhlfihh");

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

    console.log(formData);

    cloudinary.uploader
      .destroy(product[0].public_id)
      .then((result) => console.log(result));

    await prisma.product.update({
      where: {
        productid: slug,
      },
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
      categoryid.map(async (e) => {
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
