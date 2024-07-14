import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

function ProductCard({
  image,
  name,
  price,
  category,
}: {
  image: StaticImageData;
  name: string;
  price: string;
  category?: string;
}) {
  return (
    <div className="mb-5">
      <Link href={"/"}>
        <div
          className={
            "bg-gray-200 w-[260px] h-[265px] justify-center items-center mb-5"
          }
        >
          <Image src={image} alt={name} />
        </div>
        <div className="font-bold mb-1">{name}</div>
        {category && (
          <div className="font-semibold text-gray-400 mb-2">{category}</div>
        )}
        <div className="font-bold text-xl">{price}</div>
      </Link>
    </div>
  );
}

export default ProductCard;
