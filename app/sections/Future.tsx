import Image from "next/image";
import { motion } from "framer-motion";
import Mockup from "@/public/assets/banking.svg";
import fiveStars from "@/public/assets/five stars.svg";
import googlePlayStore from "@/public/assets/Play Store.svg";
import AppStore from "@/public/assets/App Store.svg";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Future = () => {
  return (
    <section className="font-inter pt-16 pl-5 pr-5 md:pl-16 md:pr-16 bg-[#556AF0]">
      <motion.div
        className="container flex lg:justify-between justify-center lg:flex-nowrap flex-wrap gap-6 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Animated Text Section */}
        <motion.div
          className="flex flex-col lg:justify-start justify-center lg:text-left text-center w-full"
          variants={itemVariants}
        >
          <motion.h1
            className="text-white font-extrabold text-4xl lg:text-5xl"
            variants={itemVariants}
          >
            The future of{" "}
            <span className="font-caveat text-5xl lg:text-6xl text-[#FED449]">
              personal&nbsp;
            </span>{" "}
            banking
          </motion.h1>

          <motion.p
            className="text-xl lg:3xl text-slate-300 mt-6 mb-6"
            variants={itemVariants}
          >
            Go borderless on mobile! Download the app and signup to enjoy
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            className="flex gap-4 lg:justify-start justify-center items-center lg:mt-12 mt-0 mb-6"
            variants={itemVariants}
          >
            <Image src={AppStore} className="w-36 md:w-40" alt="app-store" />
            <Image
              src={googlePlayStore}
              className="w-36 md:w-40"
              alt="google-play-store"
            />
          </motion.div>

          <motion.h4
            className="text-white text-lg"
            variants={itemVariants}
          >
            Trusted by <span className="font-bold">50k+&nbsp;</span>customers
          </motion.h4>

          <motion.div
            className="mt-2 lg:place-items-start place-items-center"
            variants={itemVariants}
          >
            <Image src={fiveStars} alt="five-stars" />
          </motion.div>
        </motion.div>

        {/* Animated Mockup Image */}
        <motion.div
          className="w-full place-items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image src={Mockup} alt="mockup" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Future;
