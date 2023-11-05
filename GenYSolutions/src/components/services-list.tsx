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
              UI/UX Design /Web Experience /Mobile Experience /Commerce
              Experience /Human Machine Interface (HMI) /Applications and
              Dashboards /Wearable App Design /Cross-Platform Experience Design
              /Design Support and Maintenance
            </p>
            <div className="mt-8 md:mt-12">
              <Link href="/services/artificial-intelligence">
                <Button variant="outline">
                  Explore Artificial Intelligence{" "}
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
              className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover"
              src="/service_video.mp4"
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
                className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover"
                src="/service_video.mp4"
              ></video>
            </div>
          </div>

          <div className="flex flex-col w-full md:px-48">
            <p className="text-2xl text-black/50">(02)</p>
            <h2 className="text-5xl lg:text-7xl text-black font-medium mt-5 md:mt-10">
              Custom <br className="hidden md:block" /> Chatbots
            </h2>
            <p className="mt-6 text-lg lg:text-2xl w-full md:w-[500px] text-black/50">
              UI/UX Design /Web Experience /Mobile Experience /Commerce
              Experience /Human Machine Interface (HMI) /Applications and
              Dashboards /Wearable App Design /Cross-Platform Experience Design
              /Design Support and Maintenance
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
                className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover"
                src="/service_video.mp4"
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
              UI/UX Design /Web Experience /Mobile Experience /Commerce
              Experience /Human Machine Interface (HMI) /Applications and
              Dashboards /Wearable App Design /Cross-Platform Experience Design
              /Design Support and Maintenance
            </p>
            <div className="mt-12">
              <Button variant="outline">
                Explore AI-Driven Analytics <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex justify-end w-full mt-10 md:mt-0">
            <video
              autoPlay
              loop
              muted
              className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover"
              src="/service_video.mp4"
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
                className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover"
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
              UI/UX Design /Web Experience /Mobile Experience /Commerce
              Experience /Human Machine Interface (HMI) /Applications and
              Dashboards /Wearable App Design /Cross-Platform Experience Design
              /Design Support and Maintenance
            </p>
            <div className="mt-12">
              <Button variant="outline">
                Explore Custom AI Solutions <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex justify-end w-full mt-10 md:mt-0">
              <video
                autoPlay
                loop
                muted
                className="w-full md:w-[700px] h-[400px] md:h-[700px] object-cover"
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

        <p className="text-center text-lg lg:text-2xl mt-8 max-w-5xl">
          Every innovation that happens here is out of a quest to get better at
          what we are already doing. We deliver ideas that make a difference,
          create experiences that transform lives and build ecosystems that
          foster progress.
        </p>

        <div className="flex flex-col md:flex-row max-w-6xl w-fit md:w-full md:justify-between mt-20">
          <div className="flex flex-col space-y-5 items-center md:items-start justify-start">
            <h4 className="text-5xl font-medium text-black">600+</h4>
            <p className="text-black/80 font-normal text-center md:text-start text-xl">
              Projects launched successfully <br /> across the globe
            </p>
          </div>
          <div className="flex flex-col space-y-5 items-center md:items-start justify-start mt-12 md:mt-0">
            <h4 className="text-5xl font-medium text-black">600+</h4>
            <p className="text-black/80 font-normal text-center md:text-start text-xl">
              Projects launched successfully <br /> across the globe
            </p>
          </div>
          <div className="flex flex-col space-y-5 items-center md:items-start justify-start mt-12 md:mt-0">
            <h4 className="text-5xl font-medium text-black">600+</h4>
            <p className="text-black/80 font-normal text-center md:text-start text-xl">
              Projects launched successfully <br /> across the globe
            </p>
          </div>
        </div>

        <Button className="mt-12 md:mt-24" variant="secondary">
          Our Previous Projects <ArrowRight className="ml-4" />
        </Button>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServicesList;
