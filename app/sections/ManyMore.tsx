import Image from "next/image";
import { motion } from "framer-motion";
import walletImg from "@/public/assets/images/wallet-img.jpg";
import exchangeImg from "@/public/assets/images/exchange.jpg";
import travelImg from "@/public/assets/images/travel.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ManyMore = () => {
  return (
    <section className="font-inter p-16 bg-[#0E0926]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col space-y-7 items-center justify-center"
      >
        <span className="font-medium bg-gradient-to-r w-fit rounded-lg px-3 py-1 from-[#342093] to-transparent text-[#9d8bf5]">
          Many more things ✨
        </span>
        <h1 className="text-white text-center lg:w-1/2 font-bold text-2xl leading-none sm:leading-normal sm:text-4xl lg:text-6xl">
          Just{" "}
          <span className="font-caveat text-[#FED449] text-4xl sm:text-6xl lg:text-8xl">
            enough
          </span>{" "}
          to get you going everyday
        </h1>
      </motion.div>

      <div className="lg:h-[400px] mt-16 grid md:grid-cols-3 grid-rows-3 gap-4 container">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="order-1 col-span-1 row-span-2 rounded-lg shadow-md flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            className="rounded-lg h-full object-center object-cover w-full"
            src={walletImg}
            alt="wallet-img"
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="px-3 py-8 md:order-2 order-4 col-span-1 row-span-1 text-white bg-[#E58A13] rounded-lg shadow-md space-y-2"
        >
          <h2 className="font-semibold text-xl">Business Transfers</h2>
          <p className="font-light">
            Boss Moves? We&apos;ve got your business transfers handled.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:order-3 order-5 col-span-1 row-span-2 rounded-lg shadow-md flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={exchangeImg}
            className="rounded-lg h-full object-cover object-center w-full"
            alt="exchange-img"
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="order-3 md:order:5 col-span-1 row-span-2 rounded-lg shadow-md flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            className="rounded-lg object-cover object-center h-full w-full"
            src={travelImg}
            alt="travel-img"
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="px-3 py-8 md:order-4 order-2 col-span-1 row-span-1 text-white bg-[#35219C] rounded-lg shadow-md space-y-2"
        >
          <h2 className="font-semibold text-xl">Personal Transfers</h2>
          <p className="font-light">Send Love, Send Support, Send Smiles!</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="px-3 py-8 order-6 col-span-1 row-span-1 text-white bg-[#EE2635] rounded-lg shadow-md space-y-2"
        >
          <h2 className="font-semibold text-xl">Currency exchange</h2>
          <p className="font-light">
            Unlock the best exchange rates, and say hello to savings.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 place-items-center grid"
      >
        <button className="w-fit bg-white px-6 py-3 text-black font-semibold rounded-lg">
          Start sending
        </button>
      </motion.div>
    </section>
  );
};
export default ManyMore;
