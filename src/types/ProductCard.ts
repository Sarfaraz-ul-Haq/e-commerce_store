import { StaticImageData } from "next/image";

export default interface ProductCardProps {
  image: StaticImageData;
  name: string;
  price: string;
  category?: string;
}
