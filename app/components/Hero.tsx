import Image from "next/image";
import HeroImage from "@/public/assets/images/main-ill.svg";
// import fader from "@/public/assets/images/fader.png";

const Hero = () => {
  return (
    <section className="grid place-items-center font-inter">
      <div className="relative grid place-items-center ">
        <Image
          src={HeroImage}
          className="md:mt-0 sm:mt-20 mt-40"
          alt="hero-image"
        />

        <div className="before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#110f23] before:backdrop-blur-md before:rounded-2xl before:z-[-1] p-8 z-30 -bottom-72 md:-bottom-80 text-center text-white space-y-8  absolute">
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
