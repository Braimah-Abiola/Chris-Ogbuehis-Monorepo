import { MoveDown } from "lucide-react";
import { Button } from "./ui/button";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const LandingAboutHero = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center pt-[8rem] md:pt-[15rem]">
        <div className="z-10 items-center md:items-start justify-between flex flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-primary md:-mt-0 text-start">
            About
          </h1>
          <Button className="md:mt-10">Get an offer</Button>
        </div>

        <div className="border border-black/10 w-full my-5 md:my-10" />

        <div className="z-10 items-start justify-between flex flex-col md:flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-black md:-mt-0 text-start">
            Gen Y Solutions
          </h1>
          <p className="mt-2 md:mt-5 max-w-full md:max-w-[26ch] text-start text-lg text-black uppercase">
            We design and develop complex AI powered solutions for businesses in
            vast industries.
          </p>
        </div>

        <div className="border border-black/10 w-full my-5 md:my-10" />

        <Link href="#about">
          <div className="flex flex-row items-center space-x-5 mt-6 md:mt-12">
            <div className="flex items-center justify-center border border-black rounded-full h-16 w-10">
              <MoveDown className="arrow-icon-down" color="black" />
            </div>
            <p className="text-black">Scroll to About</p>
          </div>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingAboutHero;
