"use client";

import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const ChatbotFaq = () => {
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
              What industries can benefit from your custom chatbots?
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
                Our custom chatbots are versatile and can benefit a wide range
                of industries, including healthcare, e-commerce, customer
                support, finance, and more. We tailor chatbots to meet the
                unique needs of each sector.
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
              Can the chatbots understand and respond to user-specific needs and
              requests?
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
                Yes, our chatbots are designed to understand and respond to
                user-specific needs and requests. Through AI-powered
                personalization, the chatbots adapt to user behaviors and
                preferences, providing tailored responses.
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
              Are your chatbots capable of handling transactions and payments
              securely?
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
                Yes, our chatbots are equipped to handle transactions and
                payments securely. We implement robust security measures, such
                as encryption and secure payment gateways, to protect sensitive
                information.
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
              Do you provide chatbot analytics for performance monitoring?
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
                Yes, we offer chatbot analytics to monitor performance, track
                user interactions, and gather valuable insights. These analytics
                help in making data-driven decisions for chatbot improvements.
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
              Can you integrate chatbots with our existing platforms and
              systems?
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
                Absolutely, we specialize in seamless chatbot integration with
                your existing platforms and systems, ensuring a smooth and
                efficient implementation process.
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
              What kind of support and maintenance do you provide for chatbots?
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
                We offer post-implementation support and maintenance to ensure
                that your chatbot continues to perform optimally. Our dedicated
                team is available for updates, enhancements, and addressing any
                issues that may arise.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ChatbotFaq;
