"use client";

import { industries } from "@/constants";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Industry from "./industry";
import IndustryModal from "./industry-modal";

const LandingIndustries = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <MaxWidthWrapper className="bg-[#1A1D28] pb-20 md:pt-60 md:pb-60 flex flex-col items-start justify-center text-center">
      <MaskText />
      <div className="servicesMain mt-20 md:mt-20">
        <div className="servicesBody">
          {industries.map((industry, index) => {
            return (
              <Industry
                index={index}
                title={industry.title}
                number={industry.number}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <IndustryModal modal={modal} services={industries} />
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingIndustries;

export function MaskText() {
  const service = useRef(null);

  const isInView = useInView(service, { once: false, margin: "0%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.8 * i,
      },
    }),
  };
  return (
    <div ref={service}>
      <div className="lineMask">
        <motion.h2
          className="text-start text-white font-semibold text-5xl lg:text-7xl"
          variants={animation}
          initial="initial"
          animate={isInView ? "enter" : ""}
        >
          We <span className="text-primary">serve</span> almost
          <br className="hidden md:block" />
          every Industry
        </motion.h2>
      </div>
    </div>
  );
}
