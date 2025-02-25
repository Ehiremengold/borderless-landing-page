import { motion } from "framer-motion";
import { faqs } from "../lib/utils";

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

const faqVariants = {
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

const FAQ = () => {
  return (
    <section className="font-inter p-16">
      <div className="flex lg:flex-row flex-col justify-between gap-16 items-center container">
        
        {/* Animated Left Text Section */}
        <motion.div
          className="flex flex-col space-y-8 lg:w-full lg:justify-start justify-center lg:items-start lg:text-left text-center items-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // 30% visibility triggers animation
          custom={1}
        >
          <motion.span
            className="font-semibold px-3 py-1 bg-secondary w-fit bg-opacity-15 rounded-lg text-secondary"
            variants={textVariants}
            custom={1}
          >
            Frequently Asked Questions 🙋‍♀️
          </motion.span>
          <motion.h1
            className="font-extrabold text-black md:text-5xl xl:text-6xl text-4xl"
            variants={textVariants}
            custom={2}
          >
            Got questions? We got answers!
          </motion.h1>
          <motion.p
            className="text-slate-500 text-xl md:text-3xl"
            variants={textVariants}
            custom={3}
          >
            Feel free to reach out to us if you have more questions for us.
          </motion.p>
          <motion.button
            className="w-fit rounded-xl px-6 py-3 bg-[#2e3539] text-white font-inter font-medium shadow-md ring-1 ring-secondary shadow-secondary"
            variants={textVariants}
            custom={4}
          >
            Contact us <span className="text-slate-400">&rarr;</span>
          </motion.button>
        </motion.div>
        
        {/* Animated FAQ Accordion */}
        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => {
            const { question, response } = faq;
            return (
              <motion.div
                key={index}
                className="collapse collapse-plus bg-white border"
                variants={faqVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-base font-medium text-black">
                  {question}
                </div>
                <div className="collapse-content">
                  <p className="text-slate-800 font-light">{response}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
