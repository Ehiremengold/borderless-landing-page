import phoneHome from "@/public/assets/images/Home.svg";
import Image from "next/image";

const Download = () => {
  return (
    <section className="p-10 font-inter">
      <div className="flex lg:flex-nowrap flex-wrap-reverse items-center justify-center gap-16 container">
        <Image src={phoneHome} alt="phone-home" />

        <div className="space-y-7 flex flex-col lg:items-start lg:justify-start items-center justify-center lg:text-left text-center">
          <span className="whitespace-nowrap text-secondary bg-secondary bg-opacity-5  font-medium rounded-lg px-2 py-1">
            Start sending money💸
          </span>
          <h1 className="font-bold text-4xl lg:text-6xl text-black">
            Just{" "}
            <span className="font-caveat text-secondary text-5xl">
              download our app
            </span>{" "}
            and start sending money in three minutes tops
          </h1>
          <p className="text-slate-500 md:w-5/6">
            Hey there world traveler! It’s time for you globetrotters to rejoice
            cos’ sending money abroad just got stupid simple.
          </p>
          <button className="rounded-xl px-4 py-2 bg-[#2e3539] text-white font-inter font-medium">
            See how <span className="text-slate-400">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Download;
