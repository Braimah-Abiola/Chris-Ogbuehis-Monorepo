import { ArrowUpRight, Dribbble, Instagram, Linkedin, LinkedinIcon, Youtube, YoutubeIcon } from "lucide-react";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const LandingFooter = () => {
  return (
    <footer className="flex flex-col w-full bg-[#0D0B0E] py-20">
      <MaxWidthWrapper>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="lg:text-7xl text-white font-semibold">
              Let&apos;s get to work.
            </h2>
            <p className="mt-5 sm:text-lg text-zinc-400">
              Quick and easy – under a minute.
            </p>
          </div>
          <Button>
            Get a quote <ArrowUpRight className="ml-3" color="black" />
          </Button>
        </div>

        <div className="flex flex-row justify-between mt-20">
          <div className="flex flex-col">
            <h4 className="text-white sm:text-lg text-start">Pages</h4>
            <p className="text-zinc-400 sm:text-lg text-start mt-4">Home</p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">About</p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">Services</p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">
              Industries
            </p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">Contact</p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white sm:text-lg text-start">Services</h4>
            <p className="text-zinc-400 sm:text-lg text-start mt-4">
              Software Development
            </p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">
              Artificial Intelligence
            </p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">
              Custom Chatbots
            </p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">
              Industries
            </p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">AI Tools</p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white sm:text-lg text-start">Other</h4>
            <p className="text-zinc-400 sm:text-lg text-start mt-4">
              Our Clients
            </p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">
              Testimonials
            </p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">Blog</p>
            <p className="text-zinc-400 sm:text-lg text-start mt-2">
              Partnerships
            </p>
          </div>

          <div className="flex flex-row space-x-40">
            <div className="flex flex-col">
              <h4 className="text-white sm:text-lg text-start">Connect</h4>
              <p className="text-zinc-400 sm:text-lg text-start mt-4">Email</p>
              <p className="text-zinc-400 sm:text-lg text-start mt-2">
                General Equiry
              </p>
              <p className="text-zinc-400 sm:text-lg text-start mt-2">
                WhatsApp Number
              </p>
              <p className="text-zinc-400 sm:text-lg text-start mt-2">
                International
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-zinc-400 sm:text-lg text-start mt-11">
                : info@genysolutions.com
              </p>
              <p className="text-zinc-400 sm:text-lg text-start mt-2">
                : +1 212 8892 123
              </p>
              <p className="text-zinc-400 sm:text-lg text-start mt-2">
                : +1 212 8892 123
              </p>
              <p className="text-zinc-400 sm:text-lg text-start mt-2">
                : +1 212 8892 123
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row items-center mt-32 justify-between">
            <div className="flex flex-row">
                <p className=" text-zinc-400">Gen Y Solutions © 2023 All rights reserved</p>
                <p className=" text-zinc-400 ml-10">Privacy Policy</p>
                <p className=" text-zinc-400 ml-4">Terms & Conditions</p>
                <p className=" text-zinc-400 ml-4">Cookie Policy</p>
            </div>

            <div className="flex flex-row space-x-8">
                <Instagram color="white"/>
                <Dribbble color="white"/>
            </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default LandingFooter;
