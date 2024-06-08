import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}

export default function Page({ params }: { params: { slug: any } }) {
  const products = getProductsByCategory(params.slug);

  return (
    <div className="flex gap-3 justify-between flex-wrap">
      {products.map((product: any) => {
        return (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
