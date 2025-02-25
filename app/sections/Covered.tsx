import flags from "@/public/assets/images/flags.svg";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Covered = () => {
  return (
    <section className="font-inter p-5 md:p-16 bg-[#fffbee]">
      <div className="flex md:flex-row flex-col justify-between gap-10 items-center container">
        
        <motion.div
          className="grid md:place-items-start place-items-center space-y-8 w-full md:text-left text-center items-center justify-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is in view
        >
          <motion.span
            className="whitespace-nowrap font-semibold text-[#826400] bg-gradient-to-r w-fit px-3 py-1 rounded-lg from-[#feeaa8] to-transparent"
            variants={textVariants}
          >
            Supercharged for 127+ countries 🚀
          </motion.span>
          <motion.h1
            className="font-extrabold text-2xl sm:text-5xl text-black"
            variants={textVariants}
          >
            From Tokyo to Timbuktu, we&apos;ve got you{" "}
            <span className="font-caveat text-5xl text-[#b62619] sm:text-6xl">
              covered
            </span>
          </motion.h1>
        </motion.div>
        
        <motion.div
          className="w-full"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is in view
        >
          <Image src={flags} className="w-full" alt="flags" />
        </motion.div>
      </div>
    </section>
  );
};

export default Covered;
