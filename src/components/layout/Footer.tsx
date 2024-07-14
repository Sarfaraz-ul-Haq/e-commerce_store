import Image from "next/image";
import Link from "next/link";
import Logo from "/public/Logo.webp";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <section className="main mt-auto">
      {/*FOOTER*/}
      <div className="flex gap-40 mb-28">
        {/*Dine Market*/}
        <div className="flex flex-col gap-5">
          <Image src={Logo} alt="Dine Market Logo" className="h-8 w-44" />
          <div>
            Small, artisan label that offers a thoughtfully curated <br />
            collection of high quality everyday essentials made.
          </div>
          <div className="flex gap-6 text-3xl">
            <Link href={"#"}>
              <FaTwitterSquare />
            </Link>
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaLinkedin />
            </Link>
          </div>
        </div>
        {/*Company*/}
        <div className="flex-col">
          <h2 className="font-bold text-2xl mb-4">Company</h2>
          <div className="flex flex-col gap-3">
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Terms of Use</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>How it Works</Link>
            <Link href={"#"}>Contact Us</Link>
          </div>
        </div>
        {/*Support*/}
        <div className="flex-col">
          <h2 className="font-bold text-2xl mb-4">Support</h2>
          <div className="flex flex-col gap-3">
            <Link href={"#"}>Support Carrer</Link>
            <Link href={"#"}>24h Service</Link>
            <Link href={"#"}>Quick Chat</Link>
          </div>
        </div>
        {/*Contact*/}
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl mb-4">Contact</h2>
          <div className="flex flex-col gap-3">
            <Link href={"#"}>WhatsApp</Link>
            <Link href={"#"}>Support 24h</Link>
          </div>
        </div>
      </div>

      {/*COPYRIGHT*/}
      <div className="h-16 flex justify-between items-center text-1xl border-t-2 border-black">
        <div>Copyright © 2022 Dine Market</div>
        <div>
          Design by. <b>Weird Design Studio</b>
        </div>
        <div>
          Made by <b>Sarfaraz ul Haq</b>
        </div>
      </div>
    </section>
  );
}

export default Footer;
