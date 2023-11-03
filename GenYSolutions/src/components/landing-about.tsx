"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import WorkSlider from "./work-slider";
import gsap from "gsap";

import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const LandingAbout = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const xPercent = useRef(0);
  const direction = useRef(-1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: "bottom bottom ",
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  });

  const animate = () => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });
    requestAnimationFrame(animate);
    xPercent.current += 0.1 * direction.current;
  };

  return (
    <div
      id="start"
      className="-mt-1 pt-[8rem] md:pt-[15rem] pb-[0rem] md:pb-[30rem]"
    >
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center mb-20 md:mb-40">
        <div className="px-2.5 md:px-0 flex flex-col md:flex-row md:items-center justify-between w-full">
          <h2 className=" text-white text-start text-5xl lg:text-7xl font-medium">
            About <br className="hidden md:block" />
            <span className=" text-primary">Gen Y Solutions</span>
          </h2>
          <div className="flex items-start">
            <Link href="/about">
              <Button className="mt-10 md:mt-0">
                Learn more <ArrowUpRight className="ml-3" color="black" />
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>

      <WorkSlider />

      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center">
        <div className="border border-[#242424] w-full md:mt-20 px-2.5 md:px-0" />

        <div className="flex flex-col md:flex-row items-start justify-between w-full mt-20 px-2.5 md:px-0">
          <div className="flex flex-row items-center justify-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-white" />
            <p className="text-white sm:text-lg">WHO ARE WE</p>
          </div>
          <div className="flex flex-col items-start space-y-4 w-full md:w-[62%] mt-4 md:mt-0">
            <h4 className=" text-white text-xl md:text-2xl text-start">
              Gen Y Solutions is a pioneering software development firm that
              specializes in integrating Artificial Intelligence (AI) to create
              state-of-the-art tools and solutions.
            </h4>
            <h4 className=" text-white text-xl md:text-2xl text-start">
              With a commitment to innovation and quality, we excel in
              developing custom chatbots, AI-driven analytics platforms, and
              specialized software solutions.
            </h4>
            <h4 className=" text-white text-xl md:text-2xl text-start">
              Our offerings are meticulously designed to cater to the unique
              requirements of diverse sectors such as healthcare, law, banking,
              and real estate.
            </h4>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="textContainer hidden md:block mt-[5rem] md:mt-[8rem]">
        <div ref={slider} className="text">
          <p ref={firstText}>Crafting AI Solutions -</p>
          <p ref={secondText}>Crafting AI Solutions -</p>
        </div>
      </div>

      <div className="md:hidden mt-[8rem]">
        <Marquee speed={150}>
          <p className="marqueeText">Crafting AI Solutions -</p>
        </Marquee>
      </div>
    </div>
  );
};

export default LandingAbout;
