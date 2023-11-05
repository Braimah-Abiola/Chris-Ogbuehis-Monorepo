"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LandingBlogs from "@/components/landing-blogs";
import LandingFooter from "@/components/landing-footer";
import LandingNavWhite from "@/components/landing-nav-white";
import LandingWork from "@/components/landing-work";
import Preloader from "@/components/preloader";
import { Button } from "@/components/ui/button";

import { AnimatePresence } from "framer-motion";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const OurClientsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflowY = "visible";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingNavWhite />
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center pt-[8rem] md:pt-[15rem]">
        <div className="z-10 items-center md:items-start justify-between flex flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-primary md:-mt-0 text-start">
            Our
          </h1>
          <Button className="md:mt-10">Get an offer</Button>
        </div>

        <div className="border border-black/10 w-full my-5 md:my-10" />

        <div className="z-10 items-start justify-between flex flex-col md:flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-black md:-mt-0 text-start">
            Clients
          </h1>
          <p className="mt-5 md:mt-5 max-w-full md:max-w-[40ch] text-start text-lg text-black uppercase">
            We focus on being a true partner to serve our valued clients the
            best. Have a look at our Client Stories to find out what makes us
            different.
          </p>
        </div>

        <div className="border border-black/10 w-full my-5 md:my-10" />

        <div className="flex flex-row items-center space-x-5 mt-6 md:mt-12">
          <div className="flex items-center justify-center border border-black rounded-full h-16 w-10">
            <MoveDown className="arrow-icon-down" color="black" />
          </div>
          <p className="text-black">Scroll to discover</p>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center pt-[5rem] pb-[5rem] md:pb-[10rem] md:pt-[10rem]">
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 items-center w-full">
          <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
            <Image
              width={170}
              height={170}
              src="/cbre_black.png"
              alt="Cbre logo"
            />
          </div>

          <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
            <Image
              width={170}
              height={170}
              src="/akelius_black.png"
              alt="Akelius logo"
            />
          </div>

          <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
            <Image
              width={170}
              height={170}
              src="/colliers_black.png"
              alt="Colliers logo"
            />
          </div>

          <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
            <Image
              width={170}
              height={170}
              src="/autogridwhite_black.png"
              alt="Autogrid logo"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 items-center w-full mt-5 md:mt-14">
          <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
            <Image
              width={170}
              height={170}
              src="/firstservice_black.png"
              alt="Firstservice logo"
            />
          </div>

          <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
            <Image
              width={170}
              height={170}
              src="/gedigitalwhite_black.png"
              alt="Gedigital logo"
            />
          </div>

          <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
            <Image
              width={170}
              height={170}
              src="/nextera_black.png"
              alt="Nextera logo"
            />
          </div>

          <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
            <Image
              width={170}
              height={170}
              src="/energyhub_black.png"
              alt="Energyhub logo"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <LandingWork />
      <div className="bg-[#fafafa]">
        <LandingBlogs />
      </div>
      <LandingFooter />
    </div>
  );
};

export default OurClientsPage;
