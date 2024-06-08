import Image from "next/image";
import Link from "next/link";
import Logo from "/public/Logo.webp";

function Footer() {
  return (
    <div className="flex gap-40">
      <div className="flex flex-col">
        <div className="mb-4">
          <Image src={Logo} alt="Dine Market Logo" />
        </div>
        <div className="mb-3 leading-7 [&:not(:first-child)]:mt-6">
          Small, artisan label that offers a thoughtfully curated <br />
          collection of high quality everyday essentials made.
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
    </div>
  );
}

export default Footer;
