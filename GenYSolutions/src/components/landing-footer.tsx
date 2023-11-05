import { ArrowUpRight, Dribbble, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

const LandingFooter = () => {
  return (
    <footer className="flex flex-col w-full bg-[#0D0B0E] pt-20 pb-20 md:pt-32 md:pb-20 px-2.5 md:px-0">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <h2 className=" text-5xl lg:text-7xl text-white font-semibold">
              Let&apos;s get to work.
            </h2>
            <p className="mt-5 sm:text-xl text-zinc-400">
              Quick and easy – under a minute.
            </p>
          </div>
          <Link className="w-fit" href="/contact">
            <div className="w-full">
              <Button className="mt-10 md:mt-0">
                Get a quote <ArrowUpRight className="ml-3" color="black" />
              </Button>
            </div>
          </Link>
        </div>

        <div className="md:hidden mt-12">
          <div className="w-full flex flex-col">
            <div className="flex flex-row space-x-20">
              <div className="flex flex-col">
                <h4 className="text-white sm:text-lg text-start">Pages</h4>
                <Link href="/">
                  <p className="text-zinc-400 sm:text-lg text-start mt-4">
                    Home
                  </p>
                </Link>
                <Link href="/about">
                  <p className="text-zinc-400 sm:text-lg text-start mt-2">
                    About
                  </p>
                </Link>
                <Link href="/services">
                  <p className="text-zinc-400 sm:text-lg text-start mt-2">
                    Services
                  </p>
                </Link>
                <Link href="/industries">
                  <p className="text-zinc-400 sm:text-lg text-start mt-2">
                    Industries
                  </p>
                </Link>
                <Link href="/contact">
                  <p className="text-zinc-400 sm:text-lg text-start mt-2">
                    Contact
                  </p>
                </Link>
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
                <p className="text-zinc-400 sm:text-lg text-start mt-2">
                  AI Tools
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-10">
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

            <div className="flex flex-row space-x-12 mt-10">
              <div className="flex flex-col">
                <h4 className="text-white sm:text-lg text-start">Connect</h4>
                <p className="text-zinc-400 sm:text-lg text-start mt-4">
                  Email
                </p>
                <p className="text-zinc-400 sm:text-lg text-start mt-2">
                  General Equiry
                </p>
                <p className="text-zinc-400 sm:text-lg text-start mt-2">
                  WhatsApp
                </p>
                <p className="text-zinc-400 sm:text-lg text-start mt-2">
                  International
                </p>
              </div>

              <div className="flex flex-col">
                <Link href="mailto:info@genysolutions.com">
                  <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-11">
                    : info@genysolutions.com
                  </p>
                </Link>
                <Link href="tel:+12128892123">
                  <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                    : +1 212 8892 123
                  </p>
                </Link>
                <Link href="tel:+12128892123">
                  <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                    : +1 212 8892 123
                  </p>
                </Link>
                <Link href="tel:+12128892123">
                  <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                    : +1 212 8892 123
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex flex-row justify-between mt-20 space-y-12 md:space-y-0">
            <div className="flex flex-col">
              <h4 className="text-white sm:text-lg text-start">Pages</h4>
              <Link href="/">
                <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-4">
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                  About
                </p>
              </Link>
              <Link href="/services">
                <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                  Services
                </p>
              </Link>
              <Link href="/industries">
                <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                  Industries
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                  Contact
                </p>
              </Link>
            </div>

            <div className="flex flex-col">
              <h4 className="text-white sm:text-lg text-start">Services</h4>
              <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-4">
                Software Development
              </p>
              <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                Artificial Intelligence
              </p>
              <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                Custom Chatbots
              </p>
              <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                Industries
              </p>
              <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                AI Tools
              </p>
            </div>

            <div className="flex flex-col">
              <h4 className="text-white sm:text-lg text-start">Other</h4>
              <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-4">
                Our Clients
              </p>
              <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                Testimonials
              </p>
              <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                Blog
              </p>
              <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                Partnerships
              </p>
            </div>

            <div className="flex flex-row space-x-12 md:space-x-40">
              <div className="flex flex-col">
                <h4 className="text-white sm:text-lg text-start">Connect</h4>
                <p className="text-zinc-400 sm:text-lg text-start mt-4">
                  Email
                </p>
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
                <Link href="mailto:info@genysolutions.com">
                  <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-11">
                    : info@genysolutions.com
                  </p>
                </Link>
                <Link href="tel:+12128892123">
                  <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                    : +1 212 8892 123
                  </p>
                </Link>
                <Link href="tel:+12128892123">
                  <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                    : +1 212 8892 123
                  </p>
                </Link>
                <Link href="tel:+12128892123">
                  <p className="text-zinc-400 hover:text-white transition-colors sm:text-lg text-start mt-2">
                    : +1 212 8892 123
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center mt-32 justify-between">
          <div className="flex flex-col items-center md:flex-row">
            <p className=" text-zinc-400">
              Gen Y Solutions © 2023 All rights reserved
            </p>
            <Link href="/privacy-policy">
              <p className=" text-zinc-400 hover:text-white md:ml-16 mt-12 md:mt-0">
                Privacy Policy
              </p>
            </Link>
            <Link href="/terms-and-conditions">
              <p className=" text-zinc-400 hover:text-white md:ml-4 mt-4 md:mt-0">
                Terms & Conditions
              </p>
            </Link>
          </div>

          <div className="flex flex-row space-x-4 md:space-x-6 mt-12 md:mt-0">
            <Link href="https://www.instagram.com/genysolutions">
              <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-[#1d1d1d] hover:bg-primary transition-colors flex items-center justify-center">
                <Youtube color="white" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/genysolutions">
              <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-[#1d1d1d] hover:bg-primary transition-colors flex items-center justify-center">
                <Instagram color="white" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/genysolutions">
              <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-[#1d1d1d] hover:bg-primary transition-colors flex items-center justify-center">
                <Dribbble color="white" />
              </div>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default LandingFooter;
