"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LandingFooter from "@/components/landing-footer";
import LandingNavWhite from "@/components/landing-nav-white";
import Preloader from "@/components/preloader";
import { Button } from "@/components/ui/button";

import { AnimatePresence } from "framer-motion";
import { ChevronRight, MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogsPage = () => {
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
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center pt-[8rem] pb-[8rem] md:pt-[15rem] md:pb-[15rem]">
        <div className="z-10 items-start md:items-start justify-between flex flex-col md:flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-black md:-mt-0 text-start">
            Blogs
          </h1>
          <p className="mt-4 md:mt-5 max-w-full md:max-w-[24ch] text-start text-lg text-black uppercase">
            Read what excites, achieves and moves us.
          </p>
        </div>

        <div className="border border-black/10 w-full my-5 md:my-10" />

        <Link href="#blogs">
          <div className="flex flex-row items-center space-x-5 mt-6 md:mt-12">
            <div className="flex items-center justify-center border border-black rounded-full h-16 w-10">
              <MoveDown className="arrow-icon-down" color="black" />
            </div>
            <p className="text-black">Scroll to Blogs</p>
          </div>
        </Link>

        <div id="blogs" className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between pt-20 pb-5 md:pt-32 md:pb-20">
          <Link href="/blog">
            <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
              <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                <Image fill src="/c2.jpg" alt="Project 1" />
              </div>
              <div className="px-5 text-[25px] text-left">
                <p>Play the real-life city exploration games in Vidin,</p>
              </div>
              <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                <span>Blog</span>
                <span>Jan 18, 2023</span>
              </div>
            </div>
          </Link>

          <Link href="/blog">
            <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
              <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                <Image fill src="/maven.jpg" alt="Project 1" />
              </div>
              <div className="px-5 text-[25px] text-left">
                <p>Play the real-life city exploration games in Vidin,</p>
              </div>
              <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                <span>Blog</span>
                <span>Jan 18, 2023</span>
              </div>
            </div>
          </Link>

          <Link href="/blog">
            <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
              <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                <Image fill src="/wix.jpg" alt="Project 1" />
              </div>
              <div className="px-5 text-[25px] text-left">
                <p>Play the real-life city exploration games in Vidin,</p>
              </div>
              <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                <span>Blog</span>
                <span>Jan 18, 2023</span>
              </div>
            </div>
          </Link>

          <Link href="/blog">
            <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
              <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                <Image fill src="/panda.jpg" alt="Project 1" />
              </div>
              <div className="px-5 text-[25px] text-left">
                <p>Play the real-life city exploration games in Vidin,</p>
              </div>
              <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                <span>Blog</span>
                <span>Jan 18, 2023</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between">
          <Link href="/blog">
            <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
              <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                <Image fill src="/c2.jpg" alt="Project 1" />
              </div>
              <div className="px-5 text-[25px] text-left">
                <p>Play the real-life city exploration games in Vidin,</p>
              </div>
              <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                <span>Blog</span>
                <span>Jan 18, 2023</span>
              </div>
            </div>
          </Link>

          <Link href="/blog">
            <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
              <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                <Image fill src="/maven.jpg" alt="Project 1" />
              </div>
              <div className="px-5 text-[25px] text-left">
                <p>Play the real-life city exploration games in Vidin,</p>
              </div>
              <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                <span>Blog</span>
                <span>Jan 18, 2023</span>
              </div>
            </div>
          </Link>

          <Link href="/blog">
            <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
              <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                <Image fill src="/wix.jpg" alt="Project 1" />
              </div>
              <div className="px-5 text-[25px] text-left">
                <p>Play the real-life city exploration games in Vidin,</p>
              </div>
              <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                <span>Blog</span>
                <span>Jan 18, 2023</span>
              </div>
            </div>
          </Link>

          <Link href="/blog">
            <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
              <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                <Image fill src="/panda.jpg" alt="Project 1" />
              </div>
              <div className="px-5 text-[25px] text-left">
                <p>Play the real-life city exploration games in Vidin,</p>
              </div>
              <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                <span>Blog</span>
                <span>Jan 18, 2023</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full flex flex-row items-center justify-center space-x-4 p-5 mt-10 md:mt-20">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary hover:bg-primary cursor-pointer transition-all">
            <p className="text-black text-lg lg:text-xl">1</p>
          </div>
          <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white bg-white hover:border-black/60 cursor-pointer transition-all">
            <p className="text-black text-lg lg:text-xl">2</p>
          </div>
          <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white bg-white hover:border-black/60 cursor-pointer transition-all">
            <p className="text-black text-lg lg:text-xl">3</p>
          </div>
          <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white bg-white hover:border-black/60 cursor-pointer transition-all">
            <p className="text-black text-lg lg:text-xl">4</p>
          </div>
          <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white bg-white hover:border-black/60 cursor-pointer transition-all">
            <ChevronRight color="black" />
          </div>
        </div>
      </MaxWidthWrapper>

      <LandingFooter />
    </div>
  );
};

export default BlogsPage;
