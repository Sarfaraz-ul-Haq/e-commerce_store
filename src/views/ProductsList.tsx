import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ProductsList() {
  return (
    <section className="flex flex-col mt-24 items-center">
      <h3 className="mb-5">PRODUCTS</h3>
      <h1 className="mb-14">Check What We Have</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      <Image src={product.image} alt="" />
                      <div>{product.name}</div>
                      <div>{product.price}</div>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default ProductsList;
