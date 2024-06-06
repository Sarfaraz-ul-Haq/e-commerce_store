import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import bazaar_logo from "/public/bazaar_logo.webp";
import bustle_logo from "/public/bustle_logo.webp";
import versace_logo from "/public/versace_logo.webp";
import instyle_logo from "/public/instyle_logo.webp";
import hero_pic from "/public/hero_pic.webp";

function Hero() {
  return (
    <section className="flex">
      {/*Left Side*/}
      <div className="flex-1">
        <Badge
          variant={"outline"}
          className="h-10 w-28 mt-28 bg-slate-200 text-blue-800 font-bold text-1xl justify-center"
        >
          Sale 70%
        </Badge>
        <h1 className="mt-8 scroll-m-20 text-gray-900 text-4xl font-bold  lg:text-6xl">
          An Industrial Take <br /> on Streetwear
        </h1>
        <p className="text-gray-700 leading-7 [&:not(:first-child)]:mt-10">
          Anyone can beat you but no one can beat your <br /> outfit as long as
          you wear Dine outfits.
        </p>
        <Button className="w-52 h-16 rounded-none font-bold text-1xl mt-10">
          <ShoppingCart className="mr-2 h-6 w-6" /> Start Shopping
        </Button>
        <div className="flex gap-16 h-8 mt-24">
          <Image src={bazaar_logo} alt="Bazaar Logo" />
          <Image src={bustle_logo} alt="Bustle Logo" />
          <Image src={versace_logo} alt="Versace Logo" />
          <Image src={instyle_logo} alt="Instyle Logo" />
        </div>
      </div>

      {/*Right Side*/}
      <div className="mt-10 justify-center items-center bg-slate-200 rounded-full">
        <Image src={hero_pic} alt="Woman Picture" />
      </div>
    </section>
  );
}

export default Hero;
