import Image from "next/image";
import { partners } from "@/public/assets/partner-images/export";

const Partners = () => {
  return (
    <section className="font-inter p-16 bg-[#fffbee]">
      <div className="container flex items-center gap-10 md:flex-row flex-col-reverse">
        <div className="overflow-hidden border border-red-600 flex items-center w-full h-[100px]">
          <div className="flex items-center justify-center gap-7 animate-scroll">
            {partners.map((partner, index) => {
              return (
                <div className="w-12 h-12" key={index}>
                  <Image
                    alt="partner-icon"
                    width={100}
                    height={100}
                    layout="responsive"
                    src={partner.src}
                    className="object-cover"
                  ></Image>
                </div>
              );
            })}
            {partners.map((partner, index) => {
              return (
                <div
                  className="flex-shrink-0 w-12 h-12"
                  key={index + partners.length}
                >
                  <Image
                    className="object-cover"
                    alt="partner-icon"
                    width={100}
                    height={100}
                    layout="responsive"
                    src={partner.src}
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-center md:items-end">
          <span className="whitespace-nowrap font-semibold text-[#826400] bg-gradient-to-r w-fit px-3 py-1 rounded-lg from-[#feeaa8] to-transparent">
            Our partners ✅
          </span>
          <h1 className="whitespace-nowrap text-black font-extrabold lg:text-6xl md:text-4xl text-3xl">
            Trusted by
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Partners;
