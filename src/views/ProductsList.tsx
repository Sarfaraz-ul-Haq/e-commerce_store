"use client";
import products from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

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
        modules={[A11y]}
        spaceBetween={30}
        slidesPerView={3}
        className="p-4"
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="p-8 transform scale-100 transition-transform
              duration-500 ease hover:scale-110 overflow-hidden "
            >
              <div className="bg-gray-200 w-full h-[420px] flex justify-center items-center mb-3">
                <Image src={product.image} alt={product.name} />
              </div>
              <div className="mb-2 font-bold">{product.name}</div>
              <div className="font-bold">{product.price}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsList;
