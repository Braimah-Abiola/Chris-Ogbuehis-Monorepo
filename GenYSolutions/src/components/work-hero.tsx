import { MoveDown } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const WorkHero = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-start justify-center text-center pt-[8rem] md:pt-[15rem]">
      <div className="z-10 items-center md:items-start justify-between flex flex-row w-full">
        <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-primary md:-mt-0 text-start">
          Our
        </h1>
      </div>

      <div className="border border-black/10 w-full my-5 md:my-10" />

      <div className="z-10 items-start justify-between flex flex-col md:flex-row w-full">
        <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-black md:-mt-0 text-start">
          Previous Projects
        </h1>
        <p className="mt-2 md:mt-5 max-w-full text-start text-lg text-black uppercase hidden md:block">
          ALL PREVIOUS
          <br className="hidden md:block" /> PROJECTS
        </p>
      </div>

      <div className="border border-black/10 w-full my-5 md:my-10" />

      <Link href="#works">
        <div className="flex flex-row items-center space-x-5 mt-6 md:mt-12 cursor-pointer">
          <div className="flex items-center justify-center border border-black rounded-full h-16 w-10">
            <MoveDown className="arrow-icon-down" color="black" />
          </div>
          <p className="text-black">Scroll to Works</p>
        </div>
      </Link>
    </MaxWidthWrapper>
  );
};

export default WorkHero;
