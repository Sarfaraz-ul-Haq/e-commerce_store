import Image from "next/image";
import { StaticImageData } from "next/image";

function ProductCard({
  image,
  name,
  price,
}: {
  image: StaticImageData;
  name: string;
  price: string;
}) {
  return (
    <div>
      <div className="bg-slate-200 w-[280px] h-[300px]  justify-center items-center">
        <Image src={image} alt={name} />
      </div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
}

export default ProductCard;
