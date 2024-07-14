import Image from "next/image";
import Logo from "/public/Logo.webp";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

function Header() {
  return (
    <div className="flex justify-between items-center mt-8">
      <Link href={"/"}>
        <Image src={Logo} alt="Dine Market Logo" className="w-40 h-7" />
      </Link>

      <div className="flex gap-12 text-lg font-sans">
        <Link href={"/category/female"}>Female</Link>
        <Link href={"/category/male"}>Male</Link>
        <Link href={"/category/kids"}>Kids</Link>
        <Link href={"/category/products"}>All Products</Link>
      </div>

      <div className="flex items-center h-6 border rounded-md border-gray-300 relative text-black">
        <Search className="absolute h-5 w-5 ml-1" />
        <Input className="border-none w-80" />
      </div>

      <div className="bg-gray-300 rounded-full h-12 w-12 flex justify-center items-center">
        <Link href={"/"}>
          <ShoppingCart className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
