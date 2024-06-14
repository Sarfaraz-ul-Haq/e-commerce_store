"use client";

import Hero from "@/views/Hero";
import ProductsList from "@/views/ProductsList";
import PromotionsSection from "@/views/PromotionsSection";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      {/* <PromotionsSection /> */}
      <ProductsList />
    </div>
  );
}

export default Home;
