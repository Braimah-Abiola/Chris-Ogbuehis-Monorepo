"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LandingNav from "@/components/landing-nav";
import Preloader from "@/components/preloader";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import CustomFaq from "@/components/custom-faq";
import LandingBlogs from "@/components/landing-blogs";
import LandingFooter from "@/components/landing-footer";
import LandingWork from "@/components/landing-work";
import { AnimatePresence } from "framer-motion";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const CustomAISolutions = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflowY = "visible";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "75%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 2.5,
      },
    }),
  };

  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setOpenQuestion((prevOpenQuestion) =>
      prevOpenQuestion === index ? null : index
    );
  };

  const isQuestionOpen = (index: number) => {
    return openQuestion === index;
  };

  const getIconSrc = (index: number) => {
    return isQuestionOpen(index) ? "/chevron_up.svg" : "/chevron_down.svg";
  };
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingNav />
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center h-screen bg-black">
        <div className="z-10 items-center justify-center flex flex-col -mt-10 md:-mt-0">
          <div ref={body}>
            <div className="lineMask z-20">
              <motion.h1
                className="max-w-5xl text-5xl font-semibold md:text-6xl lg:text-[72px] lg:leading-[1.2] text-white md:-mt-0"
                variants={animation}
                initial="initial"
                animate={isInView ? "enter" : ""}
              >
                Custom AI Solutions
              </motion.h1>
            </div>
          </div>
          <p className=" mt-2 md:mt-5 max-w-prose text-lg text-zinc-200 text-center">
            We aim for ingenuity that leads to emotional fulfillment in every
            project.
          </p>
        </div>

        <video
          autoPlay
          loop
          muted
          className="absolute object-cover z-0 w-auto min-h-screen min-w-full md:max-w-none"
        >
          <source src="/services_bg.mp4" type="video/mp4" />
        </video>

        <Link href="#service">
          <div className="mx-auto w-fit max-w-fit px-5 md:px-20 bottom-5 md:bottom-14 md:left-0 absolute flex flex-row items-center space-x-5">
            <div className="flex items-center justify-center border-2 border-white rounded-full h-16 w-10">
              <MoveDown className="arrow-icon-down" color="white" />
            </div>
            <p className="text-white hidden md:block">Scroll to Discover</p>
          </div>
        </Link>
      </MaxWidthWrapper>

      <div className="bg-white py-32 md:py-60 w-full flex flex-col items-center px-2.5 md:px-0">
        <h2
          id="service"
          className="text-black text-4xl lg:text-6xl w-full md:w-[58%] text-center font-medium mt-10"
        >
          Gen Y Solutions Offer Tailored AI Solutions for Your Unique Business &
          Corporate Needs
        </h2>
        <div className="flex justify-center w-full mt-10 md:mt-20">
          <video
            autoPlay
            loop
            muted
            className="w-full md:w-[80%] h-[400px] md:h-[900px] object-cover rounded-[30px]"
            src="/service_video.mp4"
          />
        </div>
      </div>
      <MaxWidthWrapper className="bg-white py-10 md:py-20 flex flex-col items-start justify-center text-center">
        <div className="flex flex-row w-full items-center justify-between">
          <h2 className="text-start text-black font-medium text-5xl lg:text-7xl">
            Our Process
          </h2>
          <Image
            className="rotateGlitter"
            width={60}
            height={60}
            src="/glitter.svg"
            alt="Glitter"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row items-start justify-between md:space-x-10 md:mt-20">
          <div className="w-fit h-fit mt-10 md:mt-0">
            <video
              autoPlay
              loop
              muted
              className="w-full md:w-[500px] h-[400px] md:h-[350px] object-cover rounded-[25px]"
              src="/service_video.mp4"
            />
          </div>
          <div className="flex flex-col justify-center w-full space-y-4 mt-12 md:mt-0">
            <div
              className={`bg-white border border-[#C9C9C9] rounded-[1.2rem] py-8 ${
                isQuestionOpen(0) ? "active-faq" : ""
              }`}
              onClick={() => handleQuestionClick(0)}
            >
              <div className="flex flex-row justify-between cursor-pointer mx-5 md:mx-10">
                <h2 className="text-black text-[16px] md:text-[24px] font-medium">
                  01. Initial Consultation and Needs Assessment
                </h2>
                <Image
                  width={20}
                  height={20}
                  src={getIconSrc(0)}
                  alt="Expand"
                  className={`icon ${isQuestionOpen(0) ? "rotate" : ""}`}
                />
              </div>
              <CSSTransition
                in={isQuestionOpen(0) || false}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div className="answer-container md:ml-5 md:mr-20">
                  <p className="text-zinc-400 font-normal text-start text-[16px] md:text-[18px] mt-2 w-full px-5">
                    We initiate the process with a thorough consultation to
                    understand your specific business needs and goals. Our team
                    works closely with you to identify the challenges and
                    opportunities that can be addressed with custom AI
                    solutions.
                  </p>
                </div>
              </CSSTransition>
            </div>

            <div
              className={`bg-white border border-[#C9C9C9] rounded-[1.2rem] py-8 ${
                isQuestionOpen(1) ? "active-faq" : ""
              }`}
              onClick={() => handleQuestionClick(1)}
            >
              <div className="flex flex-row justify-between cursor-pointer mx-5 md:mx-10">
                <h2 className="text-black text-[16px] md:text-[24px] font-medium">
                  02. Bespoke AI Solution Design
                </h2>
                <Image
                  width={20}
                  height={20}
                  src={getIconSrc(1)}
                  alt="Expand"
                  className={`icon ${isQuestionOpen(1) ? "rotate" : ""}`}
                />
              </div>
              <CSSTransition
                in={isQuestionOpen(1) || false}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div className="answer-container md:ml-5 md:mr-20">
                  <p className="text-zinc-400 font-normal text-start text-[16px] md:text-[18px] mt-2 w-full px-5">
                    Our AI experts design a bespoke solution tailored to your
                    requirements. This includes selecting the most suitable AI
                    algorithms, data sources, and technology stack to ensure the
                    solution aligns perfectly with your objectives.
                  </p>
                </div>
              </CSSTransition>
            </div>

            <div
              className={`bg-white border border-[#C9C9C9] rounded-[1.2rem] py-8 ${
                isQuestionOpen(2) ? "active-faq" : ""
              }`}
              onClick={() => handleQuestionClick(2)}
            >
              <div className="flex flex-row justify-between cursor-pointer mx-5 md:mx-10">
                <h2 className="text-black text-[16px] md:text-[24px] font-medium">
                  03. Proof of Concept (PoC) Development
                </h2>
                <Image
                  width={20}
                  height={20}
                  src={getIconSrc(2)}
                  alt="Expand"
                  className={`icon ${isQuestionOpen(2) ? "rotate" : ""}`}
                />
              </div>
              <CSSTransition
                in={isQuestionOpen(2) || false}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div className="answer-container md:ml-5 md:mr-20">
                  <p className="text-zinc-400 font-normal text-start text-[16px] md:text-[18px] mt-2 w-full px-5">
                    To test the feasibility and potential benefits of the
                    proposed AI solution, we develop a PoC. This step allows you
                    to visualize how the solution will work in practice and make
                    informed decisions about its implementation.
                  </p>
                </div>
              </CSSTransition>
            </div>

            <div
              className={`bg-white border border-[#C9C9C9] rounded-[1.2rem] py-8 ${
                isQuestionOpen(3) ? "active-faq" : ""
              }`}
              onClick={() => handleQuestionClick(3)}
            >
              <div className="flex flex-row justify-between cursor-pointer mx-5 md:mx-10">
                <h2 className="text-black text-[16px] md:text-[24px] font-medium">
                  04. AI Integration and Full-Scale Development
                </h2>
                <Image
                  width={20}
                  height={20}
                  src={getIconSrc(3)}
                  alt="Expand"
                  className={`icon ${isQuestionOpen(3) ? "rotate" : ""}`}
                />
              </div>
              <CSSTransition
                in={isQuestionOpen(3) || false}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div className="answer-container md:ml-5 md:mr-20">
                  <p className="text-zinc-400 font-normal text-start text-[16px] md:text-[18px] mt-2 w-full px-5">
                    Once the PoC is approved, we move forward with full-scale
                    development, creating the custom AI solution. We ensure
                    seamless integration into your existing systems, providing a
                    unified technology stack.
                  </p>
                </div>
              </CSSTransition>
            </div>

            <div
              className={`bg-white border border-[#C9C9C9] rounded-[1.2rem] py-8 ${
                isQuestionOpen(4) ? "active-faq" : ""
              }`}
              onClick={() => handleQuestionClick(4)}
            >
              <div className="flex flex-row justify-between cursor-pointer mx-5 md:mx-10">
                <h2 className="text-black text-[16px] md:text-[24px] font-medium">
                  05. Thorough Testing and Quality Assurance
                </h2>
                <Image
                  width={20}
                  height={20}
                  src={getIconSrc(4)}
                  alt="Expand"
                  className={`icon ${isQuestionOpen(4) ? "rotate" : ""}`}
                />
              </div>
              <CSSTransition
                in={isQuestionOpen(4) || false}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div className="answer-container md:ml-5 md:mr-20">
                  <p className="text-zinc-400 font-normal text-start text-[16px] md:text-[18px] mt-2 w-full px-5">
                    AI solution undergoes rigorous testing and quality assurance
                    to verify its accuracy, security, and efficiency. We leave
                    no room for error to ensure that the system meets the
                    highest industry standards.
                  </p>
                </div>
              </CSSTransition>
            </div>

            <div
              className={`bg-white border border-[#C9C9C9] rounded-[1.2rem] py-8 ${
                isQuestionOpen(5) ? "active-faq" : ""
              }`}
              onClick={() => handleQuestionClick(5)}
            >
              <div className="flex flex-row justify-between cursor-pointer mx-5 md:mx-10">
                <h2 className="text-black text-[16px] md:text-[24px] font-medium">
                  06. Deployment and Ongoing Support
                </h2>
                <Image
                  width={20}
                  height={20}
                  src={getIconSrc(5)}
                  alt="Expand"
                  className={`icon ${isQuestionOpen(5) ? "rotate" : ""}`}
                />
              </div>
              <CSSTransition
                in={isQuestionOpen(5) || false}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div className="answer-container md:ml-5 md:mr-20">
                  <p className="text-zinc-400 font-normal text-start text-[16px] md:text-[18px] mt-2 w-full px-5">
                    With your custom AI solution successfully developed and
                    tested, we guide you through the deployment process. After
                    implementation, we continue to provide support and
                    maintenance to ensure your AI solution remains optimal and
                    up-to-date.
                  </p>
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <LandingWork />
      <CustomFaq />
      <div className=" bg-zinc-50">
        <LandingBlogs />
      </div>
      <LandingFooter />
    </div>
  );
};

export default CustomAISolutions;
