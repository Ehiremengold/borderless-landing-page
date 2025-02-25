import flags from "@/public/assets/images/flags.svg";
import Image from "next/image";

const Covered = () => {
  return (
    <section className="font-inter p-16 bg-[#fffbee]">
      <div className="flex md:flex-row flex-col justify-between gap-10 items-center container">
        <div className="grid md:place-items-start place-items-center space-y-8 w-full md:text-left text-center items-center justify-center">
          <span className="whitespace-nowrap font-semibold text-[#826400] bg-gradient-to-r w-fit px-3 py-1 rounded-lg from-[#feeaa8] to-transparent ">
            Supercharged for 127+ countries 🚀
          </span>
          <h1 className="font-extrabold text-2xl sm:text-5xl text-black">
            From Tokyo to Timbuktu, we&apos;ve got you{" "}
            <span className="font-caveat text-5xl text-[#b62619] sm:text-6xl">
              covered
            </span>
          </h1>
        </div>
        <div className="w-full">
          <Image src={flags} className="w-full" alt="flags" />
        </div>
      </div>
    </section>
  );
};
export default Covered;
