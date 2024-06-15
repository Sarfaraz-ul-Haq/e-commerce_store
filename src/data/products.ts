import { StaticImageData } from "next/image";
import cameryn_sash_tie_dress from "/public/cameryn_sash_tie_dress.png";

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  image: StaticImageData;
};

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: "50$",
    category: "female",
    image: cameryn_sash_tie_dress,
  },
  {
    id: 2,
    name: "Product 2",
    price: "50$",
    category: "female",
    image: cameryn_sash_tie_dress,
  },
  {
    id: 3,
    name: "Product 3",
    price: "50$",
    category: "female",
    image: cameryn_sash_tie_dress,
  },
  {
    id: 4,
    name: "Product 4",
    price: "50$",
    category: "female",
    image: cameryn_sash_tie_dress,
  },
  {
    id: 5,
    name: "Product 5",
    price: "50$",
    category: "female",
    image: cameryn_sash_tie_dress,
  },
  {
    id: 6,
    name: "Product 6",
    price: "50$",
    category: "female",
    image: cameryn_sash_tie_dress,
  },
  {
    id: 7,
    name: "Product 7",
    price: "50$",
    category: "female",
    image: cameryn_sash_tie_dress,
  },
  {
    id: 8,
    name: "Product 8",
    price: "50$",
    category: "female",
    image: cameryn_sash_tie_dress,
  },
  {
    id: 9,
    name: "Product 9",
    price: "50$",
    category: "female",
    image: cameryn_sash_tie_dress,
  },
  {
    id: 10,
    name: "Product 10",
    price: "50$",
    category: "female",
    image: cameryn_sash_tie_dress,
  },
];

export default products;
