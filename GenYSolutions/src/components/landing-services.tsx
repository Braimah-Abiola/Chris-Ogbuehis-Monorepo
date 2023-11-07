"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Service from "./service";
import Modal from "./modal";

import { useRef, useState } from "react";
import { services } from "@/constants";
import { useInView, motion } from "framer-motion";

const LandingServices = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <MaxWidthWrapper className="bg-[#1A1D28] py-40 md:py-60 flex flex-col items-start justify-center text-center">
      <MaskText />
      <div className="flex flex-row w-full items-start space-x-20 mt-20">
        <p className="text-white uppercase max-w-[19ch] text-left text-lg">
          Solving complex complems using ai at race car speed
        </p>
        <p className="text-zinc-400 text-lg">EST. 2013</p>
        <p className="text-white max-w-[100ch] text-lg text-start hidden md:block">
          At Gen Y Solutions, we understand that your AI development needs are
          as diverse and unique as your business itself. That&apos;s why we take
          pride in offering you our top-notch Software Engineering Talent – a
          team dedicated to bringing your AI dreams to life. Our commitment to
          innovation, precision, and unwavering quality ensures that every
          aspect of your project is not just met but exceeded.
        </p>
      </div>
      <p className="text-white max-w-full w-full text-start md:hidden mt-6 text-lg">
        At Gen Y Solutions, we understand that your AI development needs are as
        diverse and unique as your business itself. That&apos;s why we take
        pride in offering you our top-notch Software Engineering Talent – a team
        dedicated to bringing your AI dreams to life. Our commitment to
        innovation, precision, and unwavering quality ensures that every aspect
        of your project is not just met but exceeded.
      </p>

      <div className="servicesMain mt-20 md:mt-32 md:ml-60">
        <div className="servicesBody">
          {services.map((service, index) => {
            return (
              <Service
                href={service.href}
                index={index}
                title={service.title}
                sub1={service.sub1}
                sub2={service.sub2}
                sub3={service.sub3}
                number={service.number}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} services={services} />
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingServices;

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
          className="text-start text-white font-semibold text-5xl lg:text-7xl md:ml-60"
          variants={animation}
          initial="initial"
          animate={isInView ? "enter" : ""}
        >
          <span className="text-primary">Top Software Engineering Talent </span>
          <br className="hidden md:block" />
          To Satisfy Your Every AI Development
          <br className="hidden md:block" /> Whim. Committed. Precise.
        </motion.h2>
      </div>
    </div>
  );
}
