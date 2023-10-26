import MaxWidthWrapper from "./MaxWidthWrapper";

import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const LandingWork = () => {
  return (
    <MaxWidthWrapper className="py-60 flex flex-col items-start justify-center text-center mb-20">
      <div className="flex flex-row w-full items-start space-x-40">
        <div className="flex flex-col items-start">
          <h2 className="text-start font-semibold lg:text-7xl">
            Our Work <br className="hidden md:block" /> & Case Studies
          </h2>
          <div className="flex flex-row items-center justify-center mt-5 space-x-3">
            <div className="w-3 h-3 rounded-full bg-black" />
            <p className="text-black sm:text-lg">
              {" "}
              Browse our selected projects below
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center px-10">
          <p>Learn more about us</p>
          <Button variant="line" size="line">
            ABOUT GEN Y SOLUTIONS
            <ArrowUpRight className="ml-3" color="black" />
          </Button>
        </div>

        <div className="flex flex-col items-start justify-center px-10">
          <p className="mb-4 font-medium">Areas</p>
          <div className="space-y-2 items-start flex flex-col">
            <p className="font-normal">Artificial Intelligence</p>
            <p className="font-normal">Custom Chatbots</p>
            <p className="font-normal">AI Driven Analytics</p>
            <p className="font-normal">Custom AI Solutions</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full justify-between items-center mt-32">
        <div className="flex flex-col">
          <div className="relative w-full md:w-[840px] h-fit md:h-[680px]">
            <Image fill src="/project1.png" alt="Project 1" />
          </div>
          <h4 className="lg:text-4xl font-medium text-start mt-10">
            Custom Production
          </h4>
          <div className="flex flex-row space-x-4 mt-2">
            <p className="text-black sm:text-lg">UX/UI Design</p>
            <div className="flex flex-row items-center justify-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-black" />
              <p className="text-black sm:text-lg">UX/UI Design</p>
            </div>
          </div>
          <p></p>
        </div>

        <div className="flex flex-col">
          <div className="relative w-full md:w-[840px] h-fit md:h-[680px]">
            <Image fill src="/project2.png" alt="Project 1" />
          </div>
          <h4 className="lg:text-4xl font-medium text-start mt-10">
            Custom Production
          </h4>
          <div className="flex flex-row space-x-4 mt-2">
            <p className="text-black sm:text-lg">UX/UI Design</p>
            <div className="flex flex-row items-center justify-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-black" />
              <p className="text-black sm:text-lg">UX/UI Design</p>
            </div>
          </div>
          <p></p>
        </div>
      </div>

      <div className="flex flex-col w-full mt-24">
        <div className="relative w-full md:w-[100%] h-fit md:h-[760px]">
          <Image fill src="/project3.png" alt="Project 1" />
        </div>
        <h4 className="lg:text-4xl font-medium text-start mt-10">
          Custom Production
        </h4>
        <div className="flex flex-row space-x-4 mt-2">
          <p className="text-black sm:text-lg">UX/UI Design</p>
          <div className="flex flex-row items-center justify-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-black" />
            <p className="text-black sm:text-lg">UX/UI Design</p>
          </div>
        </div>
        <p></p>
      </div>

      <div className="flex flex-row w-full justify-between items-start mt-32">
        <div className="flex flex-col">
          <div className="relative w-full md:w-[840px] h-fit md:h-[920px]">
            <Image fill src="/project4.png" alt="Project 1" />
          </div>
          <h4 className="lg:text-4xl font-medium text-start mt-10">
            Custom Production
          </h4>
          <div className="flex flex-row space-x-4 mt-2">
            <p className="text-black sm:text-lg">UX/UI Design</p>
            <div className="flex flex-row items-center justify-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-black" />
              <p className="text-black sm:text-lg">UX/UI Design</p>
            </div>
          </div>
          <p></p>
        </div>

        <div className="flex flex-col">
          <div className="relative w-full md:w-[840px] h-fit md:h-[680px]">
            <Image fill src="/project5.png" alt="Project 1" />
          </div>
          <h4 className="lg:text-4xl font-medium text-start mt-10">
            Custom Production
          </h4>
          <div className="flex flex-row space-x-4 mt-2">
            <p className="text-black sm:text-lg">UX/UI Design</p>
            <div className="flex flex-row items-center justify-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-black" />
              <p className="text-black sm:text-lg">UX/UI Design</p>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingWork;
