import products from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "@/components/ProductCard";

const ProductsList = () => {
  return (
    <div className="products-outer-container mt-24 mb-24">
      <div className="subtitle text-center mb-8">
        <h2 className="text-blue-800 font-bold mb-4">PRODUCTS</h2>
        <h1 className="text-3xl font-bold">Check What We Have</h1>
      </div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        className="p-4"
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id} className="p-2">
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsList;
