import { ArrowRight, MoveDown } from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Solutions = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center h-screen">
        <div className="z-10 items-center justify-center flex flex-col -mt-10 md:-mt-0">
          <MaskText />
          <p className=" mt-2 md:mt-5 max-w-prose text-lg text-zinc-200 text-center">
            Give all the elements essential to enhance every aspect of your
            E-commerce journey, from the shopping experience to boundless
            marketing solutions. Drive the future with AI-led E-commerce
            solutions tailored to harmonise with any platform!
          </p>
          <Link href="/contact">
            <Button className="mt-10" variant="secondary">
              Enquire Now <ArrowRight className="ml-4" />
            </Button>
          </Link>
        </div>

        <video
          autoPlay
          loop
          muted
          className="absolute object-cover z-0 w-auto min-h-screen min-w-full md:max-w-none"
        >
          <source src="/solutions_bg.mp4" type="video/mp4" />
        </video>
      </MaxWidthWrapper>
    </div>
  );
};

export default Solutions;

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
          Next-gen Business Solutions with Artificial Intelligence.
        </motion.h1>
      </div>
    </div>
  );
}
