import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBg = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const mountain4Y = useTransform(x, [0, 0.7], ["0%", "8%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overlow-y-hidden">
        {/* bg sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50 md:flex"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="absolute inset-0 w-full h-screen -z-50 md:hidden"
          style={{
            backgroundImage: "url(/assets/skyM.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        ></div>
        {/* Mountain 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/birds-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain4Y,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 -z-40 md:flex"
          style={{
            backgroundImage: "url(/assets/birds.png)",
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 -z-40 md:hidden"
          style={{
            backgroundImage: "url(/assets/birdsM.png)",
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        ></motion.div>
        {/* planets */}
        <motion.div
          className="absolute inset-0 -z-30 hidden md:flex"
          style={{
            // ${`md:`} "
            backgroundImage: "url(/assets/trumpet.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: mountain3Y,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 -z-30 md:hidden"
          style={{
            backgroundImage: "url(/assets/trumpetM.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: mountain4Y,
          }}
        ></motion.div>
        {/* Mountain 2 */}
        {/* <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        ></motion.div> */}
        {/* Mountain 1 */}
        {/* <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        ></motion.div> */}
        {/* Hero Pictures end here */}
      </div>
    </section>
  );
};

export default ParallaxBg;
