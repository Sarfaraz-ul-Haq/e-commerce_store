import Image from "next/image";
import Link from "next/link";
import Logo from "/public/Logo.webp";

function Footer() {
  return (
    <div className="flex gap-40">
      <div className="flex flex-col">
        <div className="mb-4">
          <Link href={"/"}>
            <Image src={Logo} alt="Dine Market Logo" />
          </Link>
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
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Terms of Use</Link>
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>How it Works</Link>
          <Link href={"#"}>Contact Us</Link>
        </div>
      </div>

      {/*Support*/}
      <div className="flex-col gap-4">
        <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
          Support
        </h2>
        <div className="leading-7 [&:not(:first-child)]:mt-6">
          <Link href={"#"}>Support Carrer</Link>
          <Link href={"#"}>24h Service</Link>
          <Link href={"#"}>Quick Chat</Link>
        </div>
      </div>

      {/*Contact*/}
      <div className="flex-col gap-4">
        <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
          Contact
        </h2>
        <div className="leading-7 [&:not(:first-child)]:mt-6">
          <Link href={"#"}>WhatsApp</Link>
          <Link href={"#"}>Support 24h</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
