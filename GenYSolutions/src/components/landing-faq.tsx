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
    return isQuestionOpen(index) ? "/chevron_up.svg" : "/chevron_down.svg";
  };

  return (
    <MaxWidthWrapper className="bg-white py-40 md:py-60 flex flex-col items-start justify-center text-center">
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

      <div className="flex flex-col justify-center w-full space-y-4 mt-20">
        <div
          className={`bg-white border border-[#C9C9C9] rounded-[1.2rem] py-8 ${
            isQuestionOpen(0) ? "active-faq" : ""
          }`}
          onClick={() => handleQuestionClick(0)}
        >
          <div className="flex flex-row justify-between cursor-pointer mx-5 md:mx-10">
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
            <div className="answer-container md:ml-5 md:mr-20">
              <p className="text-zinc-400 font-normal text-start text-[16px] md:text-[18px] mt-2 w-full px-5">
                At Gen Y Solutions, we stand out as a pioneering software
                development firm with a strong focus on integrating Artificial
                Intelligence (AI) into cutting-edge solutions. We offer a
                diverse range of services and boast top-tier software
                engineering talent that is committed to innovation, precision,
                and quality. Our tailored solutions cater to a wide array of
                industries, ensuring your unique requirements are met with
                excellence. With our team&apos;s expertise in AI and software
                development, we are dedicated to providing you with the most
                advanced, customized, and reliable solutions in the market.
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
              How does it work?
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
                Working with Gen Y Solutions is a straightforward process.
                First, you get in touch with us to discuss your project
                requirements. Our team will then work closely with you to
                understand your specific needs and objectives. We will create a
                project plan and provide a quote. Once the project begins, our
                team will develop, test, and refine the software or AI solution
                based on your requirements. Throughout the project, we maintain
                open communication to keep you informed about the progress.
                After successful development, we provide support and maintenance
                to ensure your software or AI solution functions smoothly.
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
              Are the requests really unlimited?
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
                Yes, we offer a flexible and customer-centric approach. While we
                don&apos;t place strict limitations on the number of requests,
                we do prioritize efficient and productive use of our resources.
                We encourage open communication with our clients to ensure that
                your requests are aligned with the project&apos;s scope and
                objectives. We work closely with you to make sure your needs are
                met while maintaining project efficiency.
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
              What is the turnaround time?
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
                The turnaround time for a project can vary significantly
                depending on its complexity, size, and specific requirements.
                During the project planning phase, we provide you with an
                estimated timeline, taking into account your project&apos;s
                unique characteristics. We are committed to delivering
                high-quality solutions in a timely manner and ensure that you
                are kept informed of progress throughout the project.
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
              What software do you use?
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
                We employ a wide range of software and technologies in our
                projects. Our choice of software and tools depends on the
                specific requirements of each project. We are proficient in
                using the latest programming languages, frameworks, and AI
                technologies to ensure the development of robust and efficient
                solutions. Our software selection is always tailored to best
                meet the unique needs of your project.
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
              Are refunds available?
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
                Our commitment to quality and customer satisfaction is
                unwavering. If you are not satisfied with the final product or
                service, we will work diligently to address your concerns and
                make necessary revisions to meet your expectations. While we do
                not provide refunds as a standard policy, we are dedicated to
                ensuring your project&apos;s success and your satisfaction throughout
                the development process. Open communication with our team
                ensures that any issues are addressed promptly and effectively.
                Your success is our priority.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingFaq;
