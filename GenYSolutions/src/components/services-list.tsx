import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

const ServicesList = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col text-start pt-40 pb-40">
        <div className="flex flex-row w-full items-center justify-between px-20 mt-40">
          <div className="flex flex-col w-full">
            <p className="text-2xl text-black/50">(01)</p>
            <h2 className="text-7xl text-black font-medium mt-10">
              Artificial <br /> Intelligence
            </h2>
            <p className="mt-6 text-lg lg:text-2xl w-[500px] text-black/50">
              UI/UX Design /Web Experience /Mobile Experience /Commerce
              Experience /Human Machine Interface (HMI) /Applications and
              Dashboards /Wearable App Design /Cross-Platform Experience Design
              /Design Support and Maintenance
            </p>
            <div className="mt-12">
              <Button variant="outline">
                Explore Artificial Intelligence <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex justify-end w-full">
            <video
              autoPlay
              loop
              muted
              className="w-[700px] h-[700px] object-cover"
              src="https://admin.wac.co/uploads/expirence_10_1d7ae97828.mp4"
            ></video>
          </div>
        </div>

        <div className="flex flex-row w-full items-center justify-between mt-40 px-20">
          <div className="flex justify-start w-full">
            <video
              autoPlay
              loop
              muted
              className="w-[700px] h-[700px] object-cover"
              src="https://admin.wac.co/uploads/expirence_10_1d7ae97828.mp4"
            ></video>
          </div>

          <div className="flex flex-col w-full px-48">
            <p className="text-2xl text-black/50">(02)</p>
            <h2 className="text-7xl text-black font-medium mt-10">
              Custom <br /> Chatbots
            </h2>
            <p className="mt-6 text-lg lg:text-2xl w-[500px] text-black/50">
              UI/UX Design /Web Experience /Mobile Experience /Commerce
              Experience /Human Machine Interface (HMI) /Applications and
              Dashboards /Wearable App Design /Cross-Platform Experience Design
              /Design Support and Maintenance
            </p>
            <div className="mt-12">
              <Button variant="outline">
                Explore Custom Chatbots <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full items-center justify-between px-20 mt-40">
          <div className="flex flex-col w-full">
            <p className="text-2xl text-black/50">(03)</p>
            <h2 className="text-7xl text-black font-medium mt-10">
              AI-Driven <br /> Analytics
            </h2>
            <p className="mt-6 text-lg lg:text-2xl w-[500px] text-black/50">
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

          <div className="flex justify-end w-full">
            <video
              autoPlay
              loop
              muted
              className="w-[700px] h-[700px] object-cover"
              src="https://admin.wac.co/uploads/expirence_10_1d7ae97828.mp4"
            ></video>
          </div>
        </div>

        <div className="flex flex-row w-full items-center justify-between mt-40 px-20">
          <div className="flex justify-start w-full">
            <video
              autoPlay
              loop
              muted
              className="w-[700px] h-[700px] object-cover"
              src="https://admin.wac.co/uploads/expirence_10_1d7ae97828.mp4"
            ></video>
          </div>

          <div className="flex flex-col w-full px-48">
            <p className="text-2xl text-black/50">(04)</p>
            <h2 className="text-7xl text-black font-medium mt-10">
              Custom AI <br /> Solutions
            </h2>
            <p className="mt-6 text-lg lg:text-2xl w-[500px] text-black/50">
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
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="flex flex-col items-center text-start pt-40 pb-[20rem]">
        <h3 className="text-black text-7xl font-medium">Our Impact</h3>

        <p className="text-center text-2xl mt-8 max-w-5xl">
          Every innovation that happens here is out of a quest to get better at
          what we are already doing. We deliver ideas that make a difference,
          create experiences that transform lives and build ecosystems that
          foster progress.
        </p>

        <div className="flex flex-row max-w-6xl w-full justify-between mt-20">
          <div className="flex flex-col space-y-5 items-start justify-start">
            <h4 className="text-5xl font-medium text-black">600+</h4>
            <p className="text-black/80 font-normal text-xl">
              Projects launched successfully <br /> across the globe
            </p>
          </div>
          <div className="flex flex-col space-y-5 items-start justify-start">
            <h4 className="text-5xl font-medium text-black">600+</h4>
            <p className="text-black/80 font-normal text-xl">
              Projects launched successfully <br /> across the globe
            </p>
          </div>
          <div className="flex flex-col space-y-5 items-start justify-start">
            <h4 className="text-5xl font-medium text-black">600+</h4>
            <p className="text-black/80 font-normal text-xl">
              Projects launched successfully <br /> across the globe
            </p>
          </div>
        </div>

        <Button className="mt-24" variant="secondary">
          Our Previous Projects <ArrowRight className="ml-4" />
        </Button>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServicesList;
