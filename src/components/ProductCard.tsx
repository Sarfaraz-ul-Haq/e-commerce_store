import Image from "next/image";
import { StaticImageData } from "next/image";

export default function ProductCard({
  image,
  name,
  category,
  price,
}: {
  image: StaticImageData;
  name: string;
  category: string;
  price: string;
}) {
  return (
    <div className="product-card p-8 transform scale-100 transition-transform duration-500 ease hover:scale-110 bg-gray-100">
      <div className="bg-gray-300 w-full h-[420px] flex justify-center items-center overflow-hidden">
        <Image src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="product-name text-lg font-semibold text-[#212121] mt-2 leading-[24px] tracking-[0.03em]">
        {name}
      </div>
      <div className="product-category text-[#212121] mt-2 leading-[24px]">
        {category}
      </div>
      <div className="product-price text-xl font-semibold text-[#212121] mt-2 leading-[24px]">
        ${price}
      </div>
    </div>
  );
}
