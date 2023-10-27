"use client";

import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const LandingFaq = () => {
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
    return isQuestionOpen(index)
      ? "/images/chevron_up.svg"
      : "/images/chevron_down.svg";
  };

  return (
    <MaxWidthWrapper className="bg-white py-40 md:py-60 flex flex-col items-start justify-center text-center">
      <div className="flex flex-row w-full items-center justify-between">
        <h2 className="text-start text-black font-semibold text-5xl lg:text-7xl">
          FAQs
        </h2>
        <Image width={60} height={60} src="/images/glitter.svg" alt="Glitter" />
      </div>

      <div className="flex flex-col justify-center w-full space-y-4 mt-20">
        <div
          className={`bg-white border border-[#C9C9C9] rounded-[1.2rem] py-8 ${
            isQuestionOpen(0) ? "active-faq" : ""
          }`}
          onClick={() => handleQuestionClick(0)}
        >
          <div className="flex flex-row justify-between cursor-pointer mx-10">
            <h2 className="text-black text-[16px] md:text-[24px] font-medium">
              Why Gen Y Solutions
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
            <div className="answer-container ml-10 mr-20">
              <p className="text-[#9B9CA1] font-normal text-start text-[16px] md:text-[18px] mt-2 w-full">
                Nova is an AI SaaS (Software as a Service) platform that allows
                users to create custom AI friends and personalities to chat with
                24/7. It provides a unique and interactive way for users to
                engage with AI-powered companions tailored to their preferences.
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
          <div className="flex flex-row justify-between cursor-pointer mx-10">
            <h2 className="text-black text-[16px] md:text-[24px] font-medium">
              How does it work?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(1)}
              alt="Expand"
              className={`icon ${isQuestionOpen(0) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(1) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container ml-10 mr-20">
              <p className="text-[#9B9CA1] font-normal text-start text-[16px] md:text-[18px] mt-2 w-full">
                Nova is an AI SaaS (Software as a Service) platform that allows
                users to create custom AI friends and personalities to chat with
                24/7. It provides a unique and interactive way for users to
                engage with AI-powered companions tailored to their preferences.
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
          <div className="flex flex-row justify-between cursor-pointer mx-10">
            <h2 className="text-black text-[16px] md:text-[24px] font-medium">
              Are the requests really unlimited?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(2)}
              alt="Expand"
              className={`icon ${isQuestionOpen(0) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(2) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container ml-10 mr-20">
              <p className="text-[#9B9CA1] font-normal text-start text-[16px] md:text-[18px] mt-2 w-full">
                Nova is an AI SaaS (Software as a Service) platform that allows
                users to create custom AI friends and personalities to chat with
                24/7. It provides a unique and interactive way for users to
                engage with AI-powered companions tailored to their preferences.
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
          <div className="flex flex-row justify-between cursor-pointer mx-10">
            <h2 className="text-black text-[16px] md:text-[24px] font-medium">
              What is the turnaround time?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(3)}
              alt="Expand"
              className={`icon ${isQuestionOpen(0) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(3) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container ml-10 mr-20">
              <p className="text-[#9B9CA1] font-normal text-start text-[16px] md:text-[18px] mt-2 w-full">
                Nova is an AI SaaS (Software as a Service) platform that allows
                users to create custom AI friends and personalities to chat with
                24/7. It provides a unique and interactive way for users to
                engage with AI-powered companions tailored to their preferences.
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
          <div className="flex flex-row justify-between cursor-pointer mx-10">
            <h2 className="text-black text-[16px] md:text-[24px] font-medium">
              What software do you use?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(4)}
              alt="Expand"
              className={`icon ${isQuestionOpen(0) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(4) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container ml-10 mr-20">
              <p className="text-[#9B9CA1] font-normal text-start text-[16px] md:text-[18px] mt-2 w-full">
                Nova is an AI SaaS (Software as a Service) platform that allows
                users to create custom AI friends and personalities to chat with
                24/7. It provides a unique and interactive way for users to
                engage with AI-powered companions tailored to their preferences.
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
          <div className="flex flex-row justify-between cursor-pointer mx-10">
            <h2 className="text-black text-[16px] md:text-[24px] font-medium">
              Are refunds available?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(5)}
              alt="Expand"
              className={`icon ${isQuestionOpen(0) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(5) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container ml-10 mr-20">
              <p className="text-[#9B9CA1] font-normal text-start text-[16px] md:text-[18px] mt-2 w-full">
                Nova is an AI SaaS (Software as a Service) platform that allows
                users to create custom AI friends and personalities to chat with
                24/7. It provides a unique and interactive way for users to
                engage with AI-powered companions tailored to their preferences.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingFaq;
