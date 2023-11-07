"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LandingFooter from "@/components/landing-footer";
import LandingNav from "@/components/landing-nav";
import LandingWork from "@/components/landing-work";
import Preloader from "@/components/preloader";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MediaEntertainment = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflowY = "visible";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingNav />

      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center h-screen">
        <div className="z-10 items-center justify-center flex flex-col -mt-10 md:-mt-0">
          <MaskText />
          <p className=" mt-2 md:mt-5 max-w-prose text-lg text-zinc-200 text-center">
            Our content recommendation engines, automated video summarization
            tools, and customer engagement chatbots are transforming how media
            companies interact with their audience.
          </p>
        </div>

        <div className="absolute bg-black/40 z-[3] w-screen h-screen md:h-[114vh]" />

        <video
          autoPlay
          loop
          muted
          className="absolute object-cover z-0 w-auto min-h-screen min-w-full md:max-w-none"
        >
          <source src="/media.mp4" type="video/mp4" />
        </video>
      </MaxWidthWrapper>

      <LandingWork />
      <LandingFooter />
    </div>
  );
};

export default MediaEntertainment;

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
          Media & Entertainment
        </motion.h1>
      </div>
    </div>
  );
}
