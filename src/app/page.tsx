"use client";

import Hero from "@/views/Hero";
import ProductsList from "@/views/ProductsList";
import PromotionsSection from "@/views/EventsSection";
import EventsSection from "@/views/EventsSection";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <EventsSection />
      <ProductsList />
    </div>
  );
}

export default Home;
