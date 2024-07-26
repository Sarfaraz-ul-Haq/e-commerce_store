import { NextResponse, NextRequest } from "next/server";
import { client } from "@/lib/sanityClient";

export async function GET() {
  try {
    const response = await client.fetch(`
      *[_type == 'category'] {
        _id,
        title,
        "products": *[_type == 'product' && references(^._id)] {
          _id,
          title,
          price,
          description,
          stock,
          "image": image.asset->url,
          "category": category->title
        }
      }
    `);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({
      message: JSON.stringify(error),
    });
  }
}
