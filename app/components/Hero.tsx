import Image from "next/image";
import HeroImage from "@/public/assets/images/main-ill.svg";
// import fader from "@/public/assets/images/fader.png";

const Hero = () => {
  return (
    <section className="grid place-items-center font-inter relative overflow-hidden">
      <div className="relative grid place-items-center">
        <Image
          src={HeroImage}
          className="md:mt-0 sm:mt-20 mt-40 z-10"
          alt="hero-image"
        />

        {/* Blurred Ellipse at the base */}
        <div className="absolute bottom-[-80px] w-[700px] h-[300px] bg-gradient-to-b from-[#2a1a50] to-transparent blur-3xl rounded-full z-0"></div>

        {/* Hero Text Section */}
        <div className="text-center text-white space-y-8 z-20 absolute -bottom-72 md:-bottom-80">
          <h1 className="font-bold text-5xl md:text-8xl">
            Sending money{" "}
            <span className="font-caveat text-[#fed449] md:text-8xl text-6xl">
              abroad&nbsp;
            </span>{" "}
            just got cooler
          </h1>
          <p className="text-lg md:text-2xl">
            Hey there world traveler! It’s time for you globetrotters to rejoice
            cos’ sending money abroad just got stupid simple
          </p>
          <button className="bg-white text-black font-medium px-3 py-2 rounded-lg">
            Start sending
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
