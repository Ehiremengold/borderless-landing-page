import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
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
  return (
    <div className="mt-28 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-white sm:text-left text-center">
            Sending money{" "}
            <span className="text-[#FED449] font-caveat">abroad&nbsp;</span>{" "}
            just got exciting!
          </h1>
          <p className="md:mt-6 mt-3 sm:text-xl text-base text-slate-300 sm:text-left text-center">
            Hey there world traveler! It’s time for you globetrotters to rejoice
            cos’ sending money abroad just got stupid simple
          </p>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-7 mb-7 sm:justify-start justify-center items-center place-items-center  gap-3 w-full flex"
          >
            <a
              className="lg:py-4 lg:px-6 py-3 px-4 flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-black bg-white  focus:outline-none  disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Start sending
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            width={900}
            height={900}
            className="w-full rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
            alt="Hero Image"
          />
          <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

          <div className="absolute bottom-0 start-0">
            <svg
              className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900"
              width="630"
              height="451"
              viewBox="0 0 630 451"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="531" y="352" width="99" height="99" fill="#fff" />
              <rect x="140" y="352" width="106" height="99" fill="#fff" />
              <rect x="482" y="402" width="64" height="49" fill="#fff" />
              <rect x="433" y="402" width="63" height="49" fill="#fff" />
              <rect x="384" y="352" width="49" height="50" fill="#fff" />
              <rect x="531" y="328" width="50" height="50" fill="#fff" />
              <rect x="99" y="303" width="49" height="58" fill="#fff" />
              <rect x="99" y="352" width="49" height="50" fill="#fff" />
              <rect x="99" y="392" width="49" height="59" fill="#fff" />
              <rect x="44" y="402" width="66" height="49" fill="#fff" />
              <rect x="234" y="402" width="62" height="49" fill="#fff" />
              <rect x="334" y="303" width="50" height="49" fill="#fff" />
              <rect x="581" width="49" height="49" fill="#fff" />
              <rect x="581" width="49" height="64" fill="#fff" />
              <rect x="482" y="123" width="49" height="49" fill="#fff" />
              <rect x="507" y="124" width="49" height="24" fill="#fff" />
              <rect x="531" y="49" width="99" height="99" fill="#fff" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
