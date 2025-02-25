import Image from "next/image";
import { motion } from "framer-motion";
import footerLogo from "@/public/assets/footerLogo.svg";

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

const Footer = () => {
  return (
    <section className="font-inter p-16 relative w-full bg-gradient-to-b from-[#0d0b2e] to-[#2a1a50]">
      
      <motion.div
        className="container place-items-start grid grid-cols-2 md:grid-cols-4 md:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Animated Logo for Desktop */}
        <motion.div
          className="sm:flex hidden items-center gap-2"
          variants={itemVariants}
        >
          <Image src={footerLogo} className="size-6" alt="footer-logo" />
          <span className="font-caveat text-3xl text-white">borderless</span>
        </motion.div>

        {/* Animated Legal Links */}
        <motion.div
          className="flex flex-col space-y-4 text-white"
          variants={itemVariants}
        >
          <span className="font-semibold uppercase">Legal</span>
          <motion.ul
            className="list-none font-extralight flex flex-col gap-4"
            variants={containerVariants}
          >
            {["Privacy Policy", "Terms of Use"].map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Animated Product Links */}
        <motion.div
          className="flex flex-col space-y-4 text-white"
          variants={itemVariants}
        >
          <span className="font-semibold uppercase">Product</span>
          <motion.ul
            className="list-none font-extralight flex flex-col gap-4"
            variants={containerVariants}
          >
            {["Sign Up", "Log in", "Pricing"].map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Animated Resources Links */}
        <motion.div
          className="flex flex-col space-y-4 text-white"
          variants={itemVariants}
        >
          <span className="font-semibold uppercase">Resources</span>
          <motion.ul
            className="list-none font-extralight flex flex-col gap-4"
            variants={containerVariants}
          >
            {["Docs", "FAQs/Support", "Contact us"].map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Horizontal Line Divider */}
      <motion.div
        className="mt-9 w-full h-[1px] bg-[#2b224d] opacity-65"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{
          opacity: 0.65,
          width: "100%",
          transition: { duration: 1, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
      />

      {/* Animated Logo for Mobile */}
      <motion.div
        className="mt-6 sm:hidden flex items-center gap-2"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image src={footerLogo} alt="footer-logo" />
        <span className="font-caveat text-4xl text-white">borderless</span>
      </motion.div>

      {/* Copyright Text */}
      <motion.p
        className="container text-white mt-4 font-light"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        &copy; 2025 borderless. All Rights reserved.
      </motion.p>
    </section>
  );
};

export default Footer;
