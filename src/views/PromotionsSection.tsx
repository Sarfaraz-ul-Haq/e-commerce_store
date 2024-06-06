import Image from "next/image";
import promotions_pic1 from "/public/promotions_pic1.webp";

function PromotionsSection() {
  return (
    <section className="flex flex-col items-center gap-5">
      <div>Promotions</div>
      <div>Our Promotions Events</div>

      <div className="flex gap-8">
        {/*Left Side*/}
        <div className="flex-col gap-6">
          <div className="bg-slate-200 w-[655px] h-52 relative">
            <div className="ml-10 mt-20 absolute">
              GET UPTO 60% <br /> For the summer season
            </div>
            <div className="ml-40">
              <Image src={promotions_pic1} alt="Woman Picture" />
            </div>
          </div>
          <div className="bg-black text-white w-[655px] h-52">
            <div className="justify-center">
              GET 30% OFF <br /> USE PROMO CODE
            </div>
          </div>
        </div>
        {/*Right Side*/}
        <div className="flex gap-5">
          <div className="bg-yellow-500 w-[290px]">Hello</div>
          <div className="bg-slate-200 w-[290px]">Hello</div>
        </div>
      </div>
    </section>
  );
}

export default PromotionsSection;
