"use client";

import LandingAbout from "@/components/landing-about";
import LandingBlogs from "@/components/landing-blogs";
import LandingClients from "@/components/landing-clients";
import LandingFaq from "@/components/landing-faq";
import LandingFooter from "@/components/landing-footer";
import LandingHero from "@/components/landing-hero";
import LandingNav from "@/components/landing-nav";
import LandingServices from "@/components/landing-services";
import LandingWork from "@/components/landing-work";
import Preloader from "@/components/preloader";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingNav />
      <LandingHero />
      <div className="bg-[#0D0B0E] pb-40">
        <LandingAbout />
      </div>
      <LandingWork />
      <LandingServices />
      <LandingClients />
      <LandingFaq />
      <LandingBlogs />
      <LandingFooter />
    </div>
  );
}
