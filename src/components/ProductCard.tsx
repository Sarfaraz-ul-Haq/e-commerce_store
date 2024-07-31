import Image from "next/image";
import Link from "next/link";

function ProductCard({
  image,
  name,
  price,
  category,
  slug,
}: {
  image: string;
  name: string;
  price: number;
  category?: string;
  slug: string;
}) {
  return (
    <div className="mb-5">
      <Link href={`/product/${slug}`}>
        <div
          className={
            "bg-gray-200 w-[260px] h-[265px] justify-center items-center mb-5 relative"
          }
        >
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div className="font-bold mb-1">{name}</div>
        {category && (
          <div className="font-semibold text-gray-400 mb-2">{category}</div>
        )}
        <div className="font-bold text-xl">${price}</div>
      </Link>
      <button className="mt-2 bg-gray-950 text-white py-1 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
