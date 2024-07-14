import Image from "next/image";
import promotions_pic1 from "/public/promotions_pic1.webp";
import pic from "/public/pic.webp";

function EventsSection() {
  return (
    <section className="flex flex-col items-center gap-5 mt-28 mb-14">
      <div>Promotions</div>
      <div>Our Promotions Events</div>

      <div className="flex w-full gap-8">
        <div className="flex flex-col gap-4">
          {/*Left Side*/}
          <div className="flex flex-col justify-center items-center bg-gray-300 w-[800px] h-[180px] text-black">
            <div className="text-3xl font-bold"> GET UP TO 60%</div>
            <div className="text-1xl"> For the summer season</div>
          </div>
          <div className="flex flex-col items-center bg-[#212121] w-[800px] h-[180px]">
            <div className="mb-4 mt-10 text-white text-4xl font-bold">
              GET 30% Off
            </div>
            <div className="mb-1 text-white">USE PROMO CODE</div>
            <div className="mb-2 bg-[#474747] text-white w-64 flex justify-center rounded-md">
              D I N E W E E K E N D S A L E
            </div>
          </div>
        </div>
        {/*Right Side*/}
        <div className="flex gap-5">
          <div className="flex-col gap-2 bg-[#EFE1C7] w-[290px]">
            <div className="ml-5 mt-5">
              <div className="font-light tracking-wide">Flex Sweatshirt</div>
              <span className=" line-through mr-2">$100</span>
              <span className="font-bold text-lg">$75</span>
            </div>
            <div className="flex-shrink">
              <Image
                src={pic}
                alt="pic"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex-col gap-2 bg-[#EFE1C7] w-[290px]">
            <div className="ml-5 mt-5">
              <div className="font-light tracking-wide">
                Flex Push Button Bomber
              </div>
              <span className=" line-through mr-2">$100</span>
              <span className="font-bold text-lg">$75</span>
            </div>
            <div className="flex-shrink">
              <Image src={pic} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
