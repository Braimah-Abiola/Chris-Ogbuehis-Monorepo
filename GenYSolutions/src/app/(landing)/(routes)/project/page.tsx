"use client";

import LandingNavWhite from "@/components/landing-nav-white";
import Preloader from "@/components/preloader";
import ProjectDeorg from "@/components/project-deorg";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
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
      <ProjectDeorg />
    </div>
  );
};

export default ProjectDetails;
