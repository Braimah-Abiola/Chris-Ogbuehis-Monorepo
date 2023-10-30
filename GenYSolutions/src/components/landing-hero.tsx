import MaxWidthWrapper from "./MaxWidthWrapper";

import { MoveDown } from "lucide-react";
import { Button } from "./ui/button";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const LandingHero = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center text-center h-screen">
      <div className="z-10 items-center justify-center flex flex-col -mt-10 md:-mt-0">
        <MaskText />
        <p className=" mt-2 md:mt-5 max-w-prose text-lg text-zinc-400 text-center">
          Revolutionizing Industries, One Custom Innovation at a Time.
        </p>

        <Button className="mt-10">Start Today</Button>
      </div>

      <video
        autoPlay
        loop
        muted
        className="absolute object-cover z-0 w-auto min-h-screen min-w-full md:max-w-none"
      >
        <source src="/hero_bg.mp4" type="video/mp4" />
      </video>

      <div className="mx-auto w-fit max-w-fit px-5 md:px-20 bottom-5 md:bottom-14 md:left-0 absolute flex flex-row items-center space-x-5">
        <div className="flex items-center justify-center border-2 border-white rounded-full h-16 w-10">
          <MoveDown className="arrow-icon-down" color="white" />
        </div>
        <p className="text-white hidden md:block">Scroll to discover</p>
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingHero;

export function MaskText() {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "75%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 2.5,
      },
    }),
  };
  return (
    <div ref={body}>
      <div className="lineMask z-20">
        <motion.h1
          className="max-w-5xl text-5xl font-semibold md:text-6xl lg:text-[72px] lg:leading-[1.2] text-white md:-mt-0"
          variants={animation}
          initial="initial"
          animate={isInView ? "enter" : ""}
        >
          Crafting Tailored AI Solutions Across Diverse Sectors.
        </motion.h1>
      </div>
    </div>
  );
}
