import Image from "next/image";
import Logo from "/public/Logo.webp";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Link href={"/"}>
        <Image src={Logo} alt="Dine Market Logo" className="w-40 h-7" />
      </Link>

      <div className="flex gap-12 text-lg font-sans">
        <Link href={"/"}>Female</Link>
        <Link href={"/"}>Male</Link>
        <Link href={"/"}>Kids</Link>
        <Link href={"/"}>All Products</Link>
      </div>

      <div className="flex items-center h-6 border rounded-md border-gray-300 relative text-black">
        <Search
          aria-placeholder="Search any product"
          className="absolute h-5 w-5 ml-1"
        />
        <Input className="border-none h-6" />
      </div>

      <div className="bg-gray-100 rounded-full h-12 w-12 flex justify-center items-center">
        <Link href={"/"}>
          <ShoppingCart className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
