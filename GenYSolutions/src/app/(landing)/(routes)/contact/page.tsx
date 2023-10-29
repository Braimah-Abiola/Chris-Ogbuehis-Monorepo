"use client";

import ContactForm from "@/components/contact-form";
import LandingContactHero from "@/components/landing-contact-hero";
import LandingFooter from "@/components/landing-footer";
import LandingNavWhite from "@/components/landing-nav-white";
import Preloader from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ContactPage = () => {
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
      <LandingNavWhite />
      <LandingContactHero />
      <ContactForm />
      <LandingFooter/>
    </div>
  );
};

export default ContactPage;
