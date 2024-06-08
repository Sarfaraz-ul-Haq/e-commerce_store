import Hero from "@/views/Hero";
import ProductList from "@/views/ProductsList";
import PromotionsSection from "@/views/PromotionsSection";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      {/* <PromotionsSection /> */}
      <ProductList />
    </div>
  );
}

export default Home;
