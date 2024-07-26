import { Product } from "./Product";

export type Fetcher = (query: string) => Promise<Product[]>;
