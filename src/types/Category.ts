import Product from "./Product";

export default interface Category {
  _id: string;
  title: string;
  products: Product[];
}
