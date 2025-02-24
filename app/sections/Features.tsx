import Image from "next/image";
import { features } from "@/public/assets/feature-icons/export";
import vector from "@/public/assets/feature-icons/vector.svg";
const Features = () => {
  return (
    <section className="p-10 font-inter">
      <div className="flex flex-col space-y-8 justify-center items-center text-center ">
        <span className="bg-green bg-opacity-10 text-green w-fit px-3 py-1 rounded-lg">
          Packed with powerful features 🔥
        </span>
        <h1 className="font-bold text-2xl leading-none sm:leading-normal sm:text-4xl lg:text-6xl text-black">
          A whole lot more than just sending{" "}
          <span className="font-caveat text-green text-4xl sm:text-6xl lg:text-8xl">
            money
          </span>
          . We&apos;re on steroids!
        </h1>

        <p className="text-lg sm:text-2xl sm:w-3/4 text-slate-500">
          Hey there world traveler! It’s time for you globetrotters to rejoice
          cos’ sending money abroad just got stupid simple{" "}
        </p>
      </div>

      <div className="mt-20 grid gap-12 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container">
        {features.map((feature, index) => {
          const { img, title, desc } = feature;
          return (
            <div
              key={index}
              className="relative border-l-2 px-5 flex flex-col justify-self-start h-full gap-4"
            >
              <Image src={img} alt="feature-icon" />
              <h2 className="font-semibold text-black">{title}</h2>
              <p className="text-slate-600">{desc}</p>
              <Image
                src={vector}
                className="absolute -left-0.5 bottom-0"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Features;
