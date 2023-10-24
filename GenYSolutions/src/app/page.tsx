import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";

export default function Home() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center text-center h-screen">
      <div className="z-10 items-center justify-center flex flex-col">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:7xl text-white">
          Crafting Tailored AI Solutions Across Diverse Sectors
        </h1>
        <p className="mt-5 max-w-prose sm:text-lg text-zinc-400 text-center">
          Revolutionizing Industries, One Custom Innovation at a Time
        </p>

        <Button className="mt-10">Start Today</Button>
      </div>

      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/hero_bg.mp4" type="video/mp4" />
      </video>

      <div className="mx-auto w-fit max-w-fit px-2.5 md:px-20 bottom-14 left-0 absolute flex flex-row items-center space-x-5">
        <div className="flex items-center justify-center border border-white rounded-full h-16 w-10">
          <MoveDown color="white" />
        </div>
        <p className="text-white">Scroll to discover</p>
      </div>
    </MaxWidthWrapper>
  );
}
