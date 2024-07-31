export default interface Product {
  _id: string;
  title: string;
  price: number;
  description?: string;
  stock?: number;
  images: { asset: { url: string } }[];
  category: string;
  slug: string;
}
