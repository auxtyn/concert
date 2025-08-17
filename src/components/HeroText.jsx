import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Earth", "skies", "clouds", "birds", "plains", "cosmos"];

  // const words = ["Earth"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop view  */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-2xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Saint Augustine's Youth Choir
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.div
            className="text-7xl font-black text-blue-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            For the beauty
            <br /> of the{" "}
            <FlipWords
              words={words}
              className="font-black text-white text-6xl"
            />
          </motion.div>
          {/* Flip words from aceternity  */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          ></motion.div>

          {/* <motion.div
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web solutions
          </motion.div> */}
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col md:hidden mb-5 pb-5 mt-5 pt-5">
        <motion.div
          className="text-3xl-100 font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Saint Augustine's Youth Choir
        </motion.div>

        <motion.div
          className="text-4xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 3.2 }}
        >
          For the beauty
          <br /> of the{" "}
          <FlipWords words={words} className="font-black text-white text-3xl" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          {/* <FlipWords
            words={words}
            className="font-bold   text-white text-7xl"
          /> */}
        </motion.div>

        {/* <motion.div
          className="text-4xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Web Applications
        </motion.div> */}
      </div>
    </div>
  );
};

export default HeroText;
