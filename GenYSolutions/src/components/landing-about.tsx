import MaxWidthWrapper from "./MaxWidthWrapper";

import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import WorkSlider from "./work-slider";

const LandingAbout = () => {
  return (
    <div className="pt-[15rem] pb-[10rem]">
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center mb-40">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className=" text-white text-start text-7xl font-medium">
            About <br className="hidden md:block" />
            <span className=" text-primary">Gen Y Solutions</span>
          </h2>
          <Button>
            Learn more <ArrowUpRight className="ml-3" color="black" />
          </Button>
        </div>
      </MaxWidthWrapper>

      <WorkSlider />

      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center">
        <div className="border border-[#242424] w-full mt-20" />

        <div className="flex flex-row items-start justify-between w-full mt-20">
          <div className="flex flex-row items-center justify-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-white" />
            <p className="text-white sm:text-lg">WHO ARE WE</p>
          </div>
          <div className="flex flex-col items-start space-y-4 w-[62%]">
            <h4 className=" text-white text-2xl text-start">
              Gen Y Solutions is a pioneering software development firm that
              specializes in integrating Artificial Intelligence (AI) to create
              state-of-the-art tools and solutions.
            </h4>
            <h4 className=" text-white text-2xl text-start">
              With a commitment to innovation and quality, we excel in
              developing custom chatbots, AI-driven analytics platforms, and
              specialized software solutions.
            </h4>
            <h4 className=" text-white text-2xl text-start">
              Our offerings are meticulously designed to cater to the unique
              requirements of diverse sectors such as healthcare, law, banking,
              and real estate.
            </h4>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingAbout;
