"use client";

import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const CustomFaq = () => {
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
    <MaxWidthWrapper className="bg-white py-32 md:py-60 flex flex-col items-start justify-center text-center">
      <div className="flex flex-row w-full items-center justify-between">
        <h2 className="text-start text-black font-semibold text-5xl lg:text-7xl">
          FAQs
        </h2>
        <Image
          className="rotateGlitter"
          width={60}
          height={60}
          src="/glitter.svg"
          alt="Glitter"
        />
      </div>

      <div className="flex flex-col justify-center w-full space-y-4 mt-12 md:mt-20">
        <div
          className={`bg-white border border-[#C9C9C9] rounded-[1.2rem] py-8 ${
            isQuestionOpen(0) ? "active-faq" : ""
          }`}
          onClick={() => handleQuestionClick(0)}
        >
          <div className="flex flex-row justify-between cursor-pointer mx-5 md:mx-10">
            <h2 className="text-black text-start text-[16px] md:text-[24px] font-medium">
              What industries can benefit from your custom AI solutions?
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
                Our custom AI solutions are adaptable and can benefit various
                industries, including healthcare, finance, manufacturing,
                education, and more. We tailor solutions to address the unique
                requirements of each sector.
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
            <h2 className="text-black text-start text-[16px] md:text-[24px] font-medium">
              How do you ensure data security and privacy in custom AI projects?
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
                Data security and privacy are paramount in our custom AI
                projects. We implement stringent security measures, including
                encryption and access controls, to protect your data throughout
                the project.
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
              Can your custom AI solutions integrate with our existing systems
              and software?
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
                Yes, we specialize in seamless integration of custom AI
                solutions with your existing systems and software. Our aim is to
                ensure a smooth and efficient implementation process.
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
              What is the typical timeline for developing a custom AI solution?
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
                The timeline varies based on the project&apos;s complexity.
                During the project planning phase, we provide an estimated
                timeline that considers your specific requirements. Our
                commitment is to deliver high-quality solutions in a timely
                manner.
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
              Do you provide post-implementation support and maintenance for
              custom AI solutions?
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
                Yes, we offer post-implementation support and maintenance to
                keep your custom AI solution running smoothly. Our dedicated
                team is available for updates, enhancements, and addressing any
                issues that may arise.
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
              Can your custom AI solutions adapt to changing business conditions
              and requirements?
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
                Yes, our custom AI solutions are designed to adapt to changing
                business conditions. They can be fine-tuned and updated to
                remain aligned with evolving business needs and objectives.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CustomFaq;
