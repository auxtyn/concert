import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut";
import HeroText from "../components/HeroText";
import ParallaxBg from "./ParallaxBg";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";
import { Suspense } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <div>
      <section className="flex items-center justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <ParallaxBg />
        <figure
          className="absolute inset-0"
          style={{ width: "100vw", height: "100vh" }}
        >
          {/* <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Loader />}>
              <Float>
              </Float>
            </Suspense>
            <OrbitControls />
            <Rig />
          </Canvas> */}
        </figure>
      </section>
    </div>
  );
};

// const Rig = () => {
//   return useFrame((state, delta) => {
//     easing.damp3(
//       state.camera.position,
//       [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
//       0.5,
//       delta
//     );
//   });
// };

export default Hero;
