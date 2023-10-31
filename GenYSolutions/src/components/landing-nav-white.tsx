"use client";

import { navLinks } from "@/constants";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import Image from "next/image";
import Menu from "./menu";
import Rounded from "./rounded-button";
import Link from "next/link";

const LandingNavWhite = () => {
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
      <div className=" w-full md:w-screen flex flex-col items-center justify-center z-20 absolute py-6">
        <div className="w-full px-5 md:px-20 flex flex-row items-center justify-between">
          <div className="relative w-[110px] h-[45px]">
            <Link href="/">
              <Image fill src="/logo_black.svg" alt="Logo" />
            </Link>
          </div>

          <div className="bg-[#191619]/70 rounded-full py-3 px-10 hidden lg:block">
            <ul className="list-none flex items-center">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.title}
                  className={` font-dmSans font-normal text-[18px] text-[#ffffff] hover:text-primary transition-colors ${
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
            className="cursor-pointer items-center flex justify-center menu-icon-container-white bg-transparent rounded-full"
          >
            <Image
              className="menu-icon"
              width={50}
              height={25}
              src="./menu_black.svg"
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

export default LandingNavWhite;
