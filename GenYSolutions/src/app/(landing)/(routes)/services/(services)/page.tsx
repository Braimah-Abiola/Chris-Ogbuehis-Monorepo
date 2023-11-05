"use client";

import LandingFooter from "@/components/landing-footer";
import LandingNav from "@/components/landing-nav";
import LandingServicesHero from "@/components/landing-services-hero";
import Preloader from "@/components/preloader";
import ServicesList from "@/components/services-list";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ServicesPage = () => {
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
      <LandingNav />
      <LandingServicesHero />
      <ServicesList />
      <LandingFooter />
    </div>
  );
};

export default ServicesPage;
