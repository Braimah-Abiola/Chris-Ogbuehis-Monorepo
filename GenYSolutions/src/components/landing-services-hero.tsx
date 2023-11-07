import { MoveDown } from "lucide-react";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const LandingServicesHero = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center text-center h-screen">
      <div className="z-10 items-center justify-center flex flex-col -mt-10 md:-mt-0">
        <MaskText />
        <p className=" mt-2 md:mt-5 max-w-prose text-lg text-zinc-200 text-center">
          We aim for ingenuity that leads to emotional fulfillment in every
          project.
        </p>
      </div>

      <video
        autoPlay
        loop
        muted
        className="absolute object-cover z-0 w-auto min-h-screen min-w-full md:max-w-none"
      >
        <source src="/services_bg.mp4" type="video/mp4" />
      </video>

      <div className="mx-auto w-fit max-w-fit px-5 md:px-20 bottom-5 md:bottom-14 md:left-0 absolute flex flex-row items-center space-x-5">
        <Link href="#serviceslist">
          <div className="flex flex-row items-center md:space-x-4">
            <div className="flex items-center justify-center border-2 border-white rounded-full h-16 w-10">
              <MoveDown className="arrow-icon-down" color="white" />
            </div>
            <p className="text-white hidden md:block">Scroll to Services</p>
          </div>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingServicesHero;

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
          Crafting AI solutions that surpass mere functionality
        </motion.h1>
      </div>
    </div>
  );
}
