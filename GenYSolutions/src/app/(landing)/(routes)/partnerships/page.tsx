"use client";

import LandingFooter from "@/components/landing-footer";
import LandingNav from "@/components/landing-nav";
import Preloader from "@/components/preloader";
import Solutions from "@/components/solutions";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SolutionsPage = () => {
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
      <Solutions />
      <div className="mt-16">
        <LandingFooter />
      </div>
    </div>
  );
};

export default SolutionsPage;
