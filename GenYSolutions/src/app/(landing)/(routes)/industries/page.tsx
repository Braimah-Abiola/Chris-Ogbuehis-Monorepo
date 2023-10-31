"use client";

import LandingBlogs from "@/components/landing-blogs";
import LandingFooter from "@/components/landing-footer";
import LandingIndustries from "@/components/landing-industries";
import LandingNav from "@/components/landing-nav";
import Preloader from "@/components/preloader";
import LandingIndustriesHero from "@/components/ui/landing-industries-hero";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Industries = () => {
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
    <div className=" overflow-x-hidden w-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <LandingNav />
      <LandingIndustriesHero />
      <div>
        <LandingIndustries />
      </div>
      <LandingBlogs />
      <LandingFooter />
    </div>
  );
};

export default Industries;
