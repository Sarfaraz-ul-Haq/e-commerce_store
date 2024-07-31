import { IoCartOutline } from "react-icons/io5";

export default function Cart() {
  return (
    <div className="mx-auto mt-6 flex max-w-[1560px] flex-col space-y-12 px-5 sm:px-10 md:px-16 lg:px-20">
      <div className="text-left text-3xl font-bold text-[#212121]">
        Shopping Cart
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <IoCartOutline className="h-[200px] w-[200px]" />
        </div>
        <div className="text-4xl font-mono">Your Shopping Cart is Empty</div>
      </div>
    </div>
  );
}
