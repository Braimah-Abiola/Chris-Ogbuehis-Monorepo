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
        <p className="text-white uppercase max-w-[19ch] text-left">
          Solving complex complems using ai at race car speed
        </p>
        <p className="text-white">EST. 2023</p>
        <p className="text-white max-w-[110ch] text-start hidden md:block">
          We cater to the creative needs of the broadest range of clients.
          Whether you are a development agency looking to outsource design work,
          a company in search of a Product Designer or Product Team, a marketing
          agency that needs a landing page, a startup that wants to launch an
          app, or an enterprise that plans to rebrand or redesign its website,
          we welcome any challenge with our arms wide open
        </p>
      </div>
      <p className="text-white max-w-full w-full text-start md:hidden mt-6 text-lg">
        We cater to the creative needs of the broadest range of clients. Whether
        you are a development agency looking to outsource design work, a company
        in search of a Product Designer or Product Team, a marketing agency that
        needs a landing page, a startup that wants to launch an app, or an
        enterprise that plans to rebrand or redesign its website, we welcome any
        challenge with our arms wide open
      </p>

      <div className="servicesMain mt-20 md:mt-32">
        <div className="servicesBody">
          {services.map((service, index) => {
            return (
              <Service
                index={index}
                title={service.title}
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
