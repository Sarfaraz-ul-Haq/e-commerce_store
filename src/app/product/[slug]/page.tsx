import { client } from "@/lib/sanityClient";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
const getProductData = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    price,
    images,
    slug,
    "category": category->title,
    description
  }`;

  try {
    const res = await client.fetch(query, { slug });
    if (!res) {
      throw new Error("Product not found");
    }
    return res;
  } catch (error) {
    return null;
  }
};

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductData(params.slug);

  if (!product) {
    return <div>This product is not available</div>;
  }

  return (
    <div>
      <div>
        {
          <Image
            src={urlForImage(product.images[0])}
            alt={product.title}
            width={500}
            height={500}
          />
        }
      </div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
      <button className="mt-2 bg-gray-950 text-white py-1 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
}
