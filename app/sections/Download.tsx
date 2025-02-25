import Image from "next/image";
import { motion } from "framer-motion";
import phoneHome from "../../public/assets/images/Home.svg";

// Animation Variants
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Download = () => {
  return (
    <section className="p-10 font-inter">
      <div className="flex lg:flex-nowrap flex-wrap-reverse items-center justify-center gap-16 container">
        
        {/* Animated Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger at 30% visibility
        >
          <Image src={phoneHome} alt="phone-home" width={500} height={500} />
        </motion.div>

        {/* Animated Text */}
        <div className="space-y-7 flex flex-col lg:items-start lg:justify-start items-center justify-center lg:text-left text-center">
          <motion.span
            className="whitespace-nowrap text-secondary bg-secondary bg-opacity-5 font-medium rounded-lg px-2 py-1"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            Start sending money💸
          </motion.span>
          <motion.h1
            className="font-bold text-4xl lg:text-6xl text-black"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            Just{" "}
            <span className="font-caveat text-secondary text-5xl">
              download our app
            </span>{" "}
            and start sending money in three minutes tops
          </motion.h1>
          <motion.p
            className="text-slate-500 md:w-5/6"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
          >
            Hey there world traveler! It’s time for you globetrotters to rejoice
            cos’ sending money abroad just got stupid simple.
          </motion.p>
          <motion.button
            className="rounded-xl px-4 py-2 bg-[#2e3539] text-white font-inter font-medium"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={4}
          >
            See how <span className="text-slate-400">&rarr;</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Download;
