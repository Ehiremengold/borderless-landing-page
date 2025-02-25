import Image from "next/image";
import { motion } from "framer-motion";
import { features } from "@/public/assets/feature-icons/export";
import vector from "@/public/assets/feature-icons/vector.svg";

// Animation Variants
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

const featureVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Features = () => {
  return (
    <section className="p-5 md:p-10 font-inter">
      
      {/* Animated Header Section */}
      <motion.div
        className="flex flex-col space-y-8 justify-center items-center text-center"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      >
        <motion.span
          className="bg-green bg-opacity-10 text-green w-fit px-3 py-1 rounded-lg"
          variants={textVariants}
          custom={1}
        >
          Packed with powerful features 🔥
        </motion.span>
        <motion.h1
          className="font-bold text-2xl leading-none sm:leading-normal sm:text-4xl lg:text-6xl text-black"
          variants={textVariants}
          custom={2}
        >
          A whole lot more than just sending{" "}
          <span className="font-caveat text-green text-4xl sm:text-6xl lg:text-8xl">
            money
          </span>
          . We&apos;re on steroids!
        </motion.h1>
        <motion.p
          className="text-lg sm:text-2xl sm:w-3/4 text-slate-500"
          variants={textVariants}
          custom={3}
        >
          Hey there world traveler! It’s time for you globetrotters to rejoice
          cos’ sending money abroad just got stupid simple{" "}
        </motion.p>
      </motion.div>
      
      {/* Animated Features Grid */}
      <div className="mt-20 grid gap-12 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container">
        {features.map((feature, index) => {
          const { img, title, desc } = feature;
          return (
            <motion.div
              key={index}
              className="relative border-l-2 px-5 flex flex-col justify-self-start h-full gap-4"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src={img} alt="feature-icon" />
              <h2 className="font-semibold text-black">{title}</h2>
              <p className="text-slate-600">{desc}</p>
              <Image
                src={vector}
                className="absolute -left-0.5 bottom-0"
                alt="vector"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
