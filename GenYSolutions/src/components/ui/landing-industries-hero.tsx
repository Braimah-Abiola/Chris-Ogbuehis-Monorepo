"use client";

import MaxWidthWrapper from "../MaxWidthWrapper";

import { MoveDown } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

const LandingIndustriesHero = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center h-screen">
        <div className="z-10 items-center justify-center flex flex-col">
          <h1 className="max-w-5xl text-5xl font-semibold md:text-6xl lg:text-7xl lg:leading-[1.2] text-white -mt-12 md:-mt-0">
            We serve AI Solutions to Diverse Industries.
          </h1>
          <p className="mt-5 max-w-prose text-lg text-zinc-200 text-center">
            Revolutionizing Industries, One Custom Innovation at a Time.
          </p>
          <Button className="mt-10">Start Today</Button>
        </div>

        <div className="absolute bg-black/10 z-[3] w-screen h-screen md:h-[114vh]" />

        <video
          autoPlay
          loop
          muted
          className="absolute object-cover z-0 w-auto min-h-screen min-w-full md:max-w-none"
        >
          <source src="/hero_bg2.mp4" type="video/mp4" />
        </video>

        <div className="mx-auto w-fit max-w-fit px-5 md:px-20 bottom-5 md:bottom-14 md:left-0 absolute flex flex-row items-center space-x-5">
          <Link href="#industries">
            <div className="flex flex-row items-center md:space-x-4">
              <div className="flex items-center justify-center border-2 border-white rounded-full h-16 w-10">
                <MoveDown className="arrow-icon-down" color="white" />
              </div>
              <p className="text-white hidden md:block">Scroll to Industries</p>
            </div>
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingIndustriesHero;
