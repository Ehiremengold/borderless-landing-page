import Image from "next/image";
import footerLogo from "@/public/assets/footerLogo.svg";

const Footer = () => {
  return (
    <section className="font-inter p-16 relative w-full bg-gradient-to-b from-[#0d0b2e] to-[#2a1a50]">
      <div className="container place-items-start grid grid-cols-2 md:grid-cols-4 gap-16">
        <div className="sm:flex hidden items-center gap-2">
          <Image src={footerLogo} alt="footer-logo" />
          <span className="font-caveat text-4xl text-white">borderless</span>
        </div>

        <div className="flex flex-col space-y-4 text-white">
          <span className="font-semibold uppercase">Legal</span>
          <ul className="list-none font-extralight flex flex-col gap-4">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 text-white">
          <span className="font-semibold uppercase">Product</span>
          <ul className="list-none font-extralight flex flex-col gap-4">
            <li>Sign Up</li>
            <li>Log in</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 text-white">
          <span className="font-semibold uppercase">Resources</span>
          <ul className="list-none font-extralight flex flex-col gap-4">
            <li>Docs</li>
            <li>FAQs/Support</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="mt-9 w-full h-[1px] bg-[#2b224d] opacity-65"></div>

      <div className="mt-6 sm:hidden flex items-center gap-2">
        <Image src={footerLogo} alt="footer-logo" />
        <span className="font-caveat text-4xl text-white">borderless</span>
      </div>

      <p className="container text-white mt-4 font-light">
        &copy; 2025 borderless. All Rights reserved.
      </p>
    </section>
  );
};
export default Footer;
