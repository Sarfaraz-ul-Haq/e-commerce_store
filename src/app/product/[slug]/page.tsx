// import { client } from "@/lib/sanityClient";
// import { urlForImage } from "../../../../sanity/lib/image";
// import Image from "next/image";
// const getProductData = async (slug: string) => {
//   const res = await client.fetch(
//     `*[_type == "product" && slug.current == $slug][0]{
//       name,
//       price,
//       image,
//       slug,
//       type,
//       category->title,
//       description
//     }`,
//     { slug }
//   );
//   return res;
// };

// export default async function ProductPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const product = await getProductData(params.slug);

//   if (!product) {
//     return <div>No product found</div>;
//   }

//   return (
//     <div className="product-page">
//       <h1>{product.name}</h1>
//       <p>Price: ${product.price}</p>
//       <div>
//         <Image src={urlForImage(product.image)} alt={product.name} />
//       </div>
//       <p>Category: {product.category}</p>
//       <p>{product.description}</p>
//       <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
//         Add to Cart
//       </button>
//     </div>
//   );
// }
