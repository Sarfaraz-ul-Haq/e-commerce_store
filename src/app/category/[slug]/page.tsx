"use client";

import useSWR from "swr";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Product from "@/types/Product";
import Category from "@/types/Category";

const fetcher = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return await res.json();
};

export default function Page({ params }: { params: { slug: string } }) {
  const { data, error, isLoading } = useSWR<Category[]>(
    "/api/getCategories",
    fetcher
  );

  if (error) {
    return <div>Failed to load categories.</div>;
  }
  if (isLoading) return <div>Loading...</div>;

  let products: Product[] = [];

  if (params.slug === "products") {
    data?.forEach((category) => {
      products = products.concat(category.products);
    });
  } else {
    const selectedCategory = data?.find(
      (category: Category) =>
        category.title.toLowerCase() === params.slug.toLowerCase()
    );
    if (selectedCategory) {
      products = selectedCategory.products;
    }
  }

  return (
    <div className="mt-14 mb-28 flex flex-wrap justify-center gap-6">
      {products.map((product: Product) => (
        <ProductCard
          key={product._id}
          image={product.images[0]?.asset.url}
          name={product.title}
          price={product.price}
          slug={product.slug}
        />
      ))}
    </div>
  );
}
