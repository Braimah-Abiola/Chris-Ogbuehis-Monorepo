"use client";

import { navLinks } from "@/constants";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Menu from "./menu";
import Rounded from "./rounded-button";
import Link from "next/link";

const LandingNav = () => {
  const button = useRef(null);
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,

        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },

        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);

  return (
    <>
      <div className="w-full md:w-screen flex flex-col items-center justify-center z-20 absolute py-6">
        <div className="w-full px-5 md:px-20 flex flex-row items-center justify-between">
          <Link href="/">
            <div className="relative w-[110px] h-[45px]">
              <Image fill src="/logo.svg" alt="Logo" />
            </div>
          </Link>

          <div className="bg-[#191619]/70 rounded-full py-3 px-10 hidden lg:block">
            <ul className="list-none flex items-center">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.title}
                  className={` font-dmSans font-normal text-[18px] text-[#9B9CA1] hover:text-white transition-colors ${
                    index === navLinks.length - 1 ? "mr-0" : "mr-[60px]"
                  }`}
                >
                  <a href={`${nav.href}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="cursor-pointer items-center flex justify-center menu-icon-container bg-transparent rounded-full"
          >
            <Image
              className="menu-icon"
              width={50}
              height={25}
              src="./menu.svg"
              alt="Menu"
            />
          </div>
        </div>
        <div ref={button} className="headerButtonContainer">
          <Rounded
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="button"
          >
            <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
          </Rounded>
        </div>
        <AnimatePresence mode="wait">{isActive && <Menu />}</AnimatePresence>
      </div>
    </>
  );
};

export default LandingNav;
