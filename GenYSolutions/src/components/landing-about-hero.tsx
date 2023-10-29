import { MoveDown } from "lucide-react";
import { Button } from "./ui/button";

import MaxWidthWrapper from "./MaxWidthWrapper";

const LandingAboutHero = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center pt-[15rem]">
        <div className="z-10 items-start justify-between flex flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-semibold md:text-6xl lg:text-[72px] lg:leading-[1.2] text-primary -mt-12 md:-mt-0 text-start">
            About
          </h1>
          <Button className="mt-10">Get an offer</Button>
        </div>

        <div className="border border-black/10 w-full my-10" />

        <div className="z-10 items-start justify-between flex flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-semibold md:text-6xl lg:text-7xl lg:leading-[1.2] text-black -mt-12 md:-mt-0 text-start">
            Gen Y Solutions
          </h1>
          <p className="mt-5 max-w-[34ch] text-start text-lg text-black uppercase">
            Design and develop complex AI powered solutions for businesses in
            vast industries.
          </p>
        </div>

        <div className="border border-black/10 w-full my-10" />

        <div className="flex flex-row items-center space-x-5 mt-12">
          <div className="flex items-center justify-center border border-black rounded-full h-16 w-10">
            <MoveDown className="arrow-icon-down" color="black" />
          </div>
          <p className="text-black hidden md:block">Scroll to discover</p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingAboutHero;
