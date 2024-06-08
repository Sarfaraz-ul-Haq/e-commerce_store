import Image from "next/image";
import Link from "next/link";
import Logo from "/public/Logo.webp";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex gap-40">
      <div className="flex flex-col">
        <div className="mb-4">
          <Image src={Logo} alt="Dine Market Logo" />
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
        <ul className="flex gap-3">
          <li>
            <Link href={"#"}>Twitter Logo</Link>
          </li>
          <li>
            <Link href={"#"}>Facebook Logo</Link>
          </li>
          <li>
            <Link href={"#"}>LinkedIn Logo</Link>
          </li>
        </ul>
      </div>

      {/*Company*/}
      <div className="flex-col gap-4">
        <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
          Company
        </h2>
        <div className="leading-7 [&:not(:first-child)]:mt-6">
          <div>About</div>
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>How it Works</div>
          <div>Contact Us</div>
        </div>
      </div>

      {/*Support*/}
      <div className="flex-col gap-4">
        <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
          Support
        </h2>
        <div className="leading-7 [&:not(:first-child)]:mt-6">
          <div>Support Carrer</div>
          <div>24h Service</div>
          <div>Quick Chat</div>
        </div>
      </div>

      {/*Contact*/}
      <div className="flex-col gap-4">
        <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
          Contact
        </h2>
        <div className="leading-7 [&:not(:first-child)]:mt-6">
          <div>WhatsApp</div>
          <div>Support 24h</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
