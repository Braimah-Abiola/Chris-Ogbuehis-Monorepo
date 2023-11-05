"use client";

import LandingFooter from "@/components/landing-footer";
import LandingNavWhite from "@/components/landing-nav-white";
import Preloader from "@/components/preloader";

import TermsAndConditions from "@/components/terms-and-conditions";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const TermsAndConditionsPage = () => {
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
      <TermsAndConditions/>
      <LandingFooter />
    </div>
  );
};

export default TermsAndConditionsPage;
