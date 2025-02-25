import Image from "next/image";
import Mockup from "@/public/assets/banking.svg";
import fiveStars from "@/public/assets/five stars.svg";
import googlePlayStore from "@/public/assets/Play Store.svg";
import AppStore from "@/public/assets/App Store.svg";

const Future = () => {
  return (
    <section className="font-inter pt-16 pl-16 pr-16  bg-[#556AF0]">
      <div className="container flex lg:justify-between justify-center lg:flex-nowrap flex-wrap gap-6 items-center">
        <div className="flex flex-col lg:justify-start justify-center lg:text-left text-center w-full">
          <h1 className="text-white font-extrabold text-4xl lg:text:5xl">
            The future of{" "}
            <span className="font-caveat text-5xl lg:text-6xl text-[#FED449]">
              personal&nbsp;
            </span>{" "}
            banking
          </h1>
          <p className="text-xl lg:3xl text-slate-300 mt-6 mb-6">
            Go borderless on mobile! Download the app and signup to enjoy
          </p>
          <div className="flex gap-4 lg:justify-start justify-center items-center lg:mt-12 mt-0 mb-6">
            <Image src={AppStore} className="w-36 md:w-40" alt="" />
            <Image src={googlePlayStore} className="w-36 md:w-40" alt="" />
          </div>

          <h4 className="text-white text-lg">
            Trusted by <span className="font-bold">50k+&nbsp;</span>customers
          </h4>
          <div className="mt-2 lg:place-items-start place-items-center">
            <Image src={fiveStars} alt="five-stars" />
          </div>
        </div>
        <div className="w-full place-items-center">
          <Image src={Mockup} alt="mockup" />
        </div>
      </div>
    </section>
  );
};
export default Future;
