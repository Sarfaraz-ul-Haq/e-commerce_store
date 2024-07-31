import { NextResponse } from "next/server";
import { client } from "@/lib/sanityClient";

export async function GET() {
  try {
    console.log("fetching...");

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
          "images": images[]{asset->{url}},
          "category": category->title,
          "slug": slug.current
        }
      }
    `);

    console.log("Fetched data: ", response);

    if (!response || response.length === 0) {
      return NextResponse.json(
        { message: "No categories found" },
        { status: 404 }
      );
    }

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      {
        message: `Failed to fetch categories: ${errorMessage}`,
      },
      { status: 500 }
    );
  }
}
