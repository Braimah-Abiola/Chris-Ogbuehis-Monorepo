"use client";

import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const AIFaq = () => {
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
              What industries can benefit from your AI services?
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
                Our AI services cater to a wide range of industries, including
                healthcare, law, banking, real estate, retail, education,
                manufacturing, transportation, logistics, energy, and media. We
                tailor our AI solutions to meet the unique requirements of each
                sector.
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
              How do you ensure data security and privacy in AI projects?
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
                Data security and privacy are paramount in our AI projects. We
                implement robust security measures, including encryption and
                access controls, to safeguard your data. Our solutions comply
                with industry-specific regulations to protect sensitive
                information.
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
              What kind of AI models do you develop, and can they adapt over
              time?
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
                We develop various AI models, such as machine learning, natural
                language processing, and computer vision. These models are
                designed to adapt over time through continuous learning,
                ensuring they remain relevant and effective.
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
              Can you integrate AI solutions with our existing software and
              systems?
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
                Yes, we specialize in seamlessly integrating AI solutions with
                your existing software and systems. Whether it&apos;s ERP, CRM,
                or other proprietary software, we ensure a smooth and efficient
                integration process.
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
              What is the typical timeline for developing a custom AI solution?
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
                The timeline varies depending on the complexity of the project.
                During the project planning phase, we provide an estimated
                timeline based on your specific requirements. We are committed
                to delivering timely solutions without compromising quality.
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
              Do you offer post-implementation support and maintenance for AI
              solutions?
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
                Yes, we provide post-implementation support and maintenance to
                keep your AI solution running smoothly. Our dedicated team is
                available to address any issues, updates, or enhancements needed
                to ensure the continued success of your AI system.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AIFaq;
