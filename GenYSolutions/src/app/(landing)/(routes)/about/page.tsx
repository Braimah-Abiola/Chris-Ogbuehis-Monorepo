"use client";

import LandingAboutHero from "@/components/landing-about-hero";
import LandingNavWhite from "@/components/landing-nav-white";

import LandingAboutWhite from "@/components/landing-about-white";
import Preloader from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LandingTeam from "@/components/landing-team";
import LandingFooter from "@/components/landing-footer";
import Recognition from "@/components/recognition";
import LandingBlogs from "@/components/landing-blogs";

const AboutPage = () => {
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
      <LandingAboutHero />
      <div id="about" className="md:my-40">
        <LandingAboutWhite />
      </div>
      <LandingTeam />
      <Recognition />
      <LandingBlogs />
      <LandingFooter />
    </div>
  );
};

export default AboutPage;
