import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const ServicesList = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col text-start md:pt-40 md:pb-40">
        <div className="flex flex-col md:flex-row w-full items-center justify-between md:px-20 mt-20 md:mt-40">
          <div className="flex flex-col w-full">
            <p className="text-2xl text-black/50">(01)</p>
            <h2 className="text-5xl lg:text-7xl text-black font-medium mt-5 md:mt-10">
              Artificial <br className="hidden md:block" /> Intelligence
            </h2>
            <p className="mt-6 text-lg lg:text-2xl w-full md:w-[500px] text-black/50">
              Machine Learning Development / Natural Language Processing (NLP) /
              Computer Vision / Reinforcement Learning / Predictive Modeling /
              AI Consultation / AI Integration Services / Proof of Concept (PoC)
              Development
            </p>
            <div className="mt-8 md:mt-12">
              <Link href="/services/artificial-intelligence">
                <Button variant="outline">
                  Explore Artificial Intelligence
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-end w-full mt-10 md:mt-0">
            <video
              autoPlay
              loop
              muted
              className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover rounded-[20px]"
              src="/ai_banner.mp4"
            ></video>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full items-center justify-between mt-20 md:mt-40 md:px-20">
          <div className="flex justify-end w-full">
            <div className="hidden md:block">
              <video
                autoPlay
                loop
                muted
                className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover rounded-[20px]"
                src="/openai.mp4"
              ></video>
            </div>
          </div>

          <div className="flex flex-col w-full md:px-48">
            <p className="text-2xl text-black/50">(02)</p>
            <h2 className="text-5xl lg:text-7xl text-black font-medium mt-5 md:mt-10">
              Custom <br className="hidden md:block" /> Chatbots
            </h2>
            <p className="mt-6 text-lg lg:text-2xl w-full md:w-[500px] text-black/50">
              Conversational Design / Multi-Platform Integration / AI-Powered
              Personalization / Continuous Learning / Transactional Chatbots /
              Support Chatbots / Survey and Feedback Chatbots / Chatbot
              Analytics
            </p>
            <div className="mt-12">
              <Link href="/services/custom-chatbots">
                <Button variant="outline">
                  Explore Custom Chatbots <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex justify-end w-full mt-10 md:mt-0">
              <video
                autoPlay
                loop
                muted
                className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover rounded-[20px]"
                src="/openai.mp4"
              ></video>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full items-center justify-between md:px-20 mt-20 md:mt-40">
          <div className="flex flex-col w-full">
            <p className="text-2xl text-black/50">(03)</p>
            <h2 className="text-5xl lg:text-7xl text-black font-medium mt-5 md:mt-10">
              AI-Driven <br className="hidden md:block" /> Analytics
            </h2>
            <p className="mt-6 text-lg lg:text-2xl w-full md:w-[500px] text-black/50">
              Data Analysis and Visualization / Predictive Modeling / Real-Time
              Data Processing / Custom Reporting Solutions / Business
              Intelligence Solutions / Data Integration Services / AI-Powered
              Data Mining / Data Analytics Consultation
            </p>
            <div className="mt-12">
              <Link href="/services/ai-driven-analytics">
                <Button variant="outline">
                  Explore AI-Driven Analytics <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-end w-full mt-10 md:mt-0">
            <video
              autoPlay
              loop
              muted
              className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover rounded-[20px]"
              src="/analytics_banner.mp4"
            ></video>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full items-center justify-between mt-20 md:mt-40 md:px-20">
          <div className="flex justify-end w-full">
            <div className="hidden md:block">
              <video
                autoPlay
                loop
                muted
                className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover rounded-[20px]"
                src="/service_video.mp4"
              ></video>
            </div>
          </div>

          <div className="flex flex-col w-full md:px-48">
            <p className="text-2xl text-black/50">(04)</p>
            <h2 className="text-5xl lg:text-7xl text-black font-medium mt-5 md:mt-10">
              Custom AI <br className="hidden md:block" /> Solutions
            </h2>
            <p className="mt-6 text-lg lg:text-2xl w-full md:w-[500px] text-black/50">
              AI Consultation / Bespoke AI Development / Proof of Concept (PoC)
              Development / AI Integration Services / Custom AI Model
              Development / AI Strategy and Planning / AI Prototype Development
              / AI Solution Maintenance and Support
            </p>
            <div className="mt-12">
              <Link href="/services/custom-ai-solutions">
                <Button variant="outline">
                  Explore Custom AI Solutions <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex justify-end w-full mt-10 md:mt-0">
              <video
                autoPlay
                loop
                muted
                className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover rounded-[20px]"
                src="/service_video.mp4"
              ></video>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="flex flex-col items-center text-start pt-40 pb-[10rem] md:pb-[20rem]">
        <h3 className="text-black text-5xl lg:text-7xl font-medium">
          Our Impact
        </h3>

        <p className="text-center text-lg lg:text-2xl mt-8 max-w-5xl text-black/80">
          Each innovation that originates within our organization stems from our
          unwavering commitment to continuous improvement. We bring forth
          concepts that drive meaningful change, craft experiences that have a
          profound impact on individuals, and construct environments that
          facilitate advancement.
        </p>

        <div className="flex flex-col md:flex-row max-w-6xl w-fit md:w-full md:justify-between mt-10 md:mt-20">
          <div className="flex flex-col space-y-5 items-center md:items-center justify-start mt-12 md:mt-0">
            <h4 className="text-5xl font-medium text-black">210+</h4>
            <p className="text-black/80 font-normal text-center md:text-center text-lg lg:text-xl">
              Projects launched successfully <br /> across the globe
            </p>
          </div>
          <div className="flex flex-col space-y-5 items-center md:items-center justify-start mt-12 md:mt-0">
            <h4 className="text-5xl font-medium text-black">10M</h4>
            <p className="text-black/80 font-normal text-center md:text-center text-lg lg:text-xl">
              Daily customer engagement <br /> throughout our projects
            </p>
          </div>
          <div className="flex flex-col space-y-5 items-center md:items-center justify-start mt-12 md:mt-0">
            <h4 className="text-5xl font-medium text-black">60+</h4>
            <p className="text-black/80 font-normal text-center md:text-center text-lg lg:text-xl">
              Digital transformation stories <br /> that made a difference
            </p>
          </div>
        </div>

        <Link href="/works">
          <Button className="mt-12 md:mt-24" variant="secondary">
            Our Previous Projects <ArrowRight className="ml-4" />
          </Button>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServicesList;
