import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import ProjectsGallery from "./projects-gallery";

const LandingWork = () => {
  return (
    <div>
      <MaxWidthWrapper className="pt-32 pb-20 md:pt-60 md:pb-10 flex flex-col items-start justify-center text-center">
        <div className="flex flex-col md:flex-row w-full items-start md:space-x-40">
          <div className="flex flex-col items-start">
            <h2 className="text-start font-semibold text-5xl lg:text-7xl">
              Our Work <br className="hidden md:block" /> & Case Studies
            </h2>
            <div className="flex flex-row items-center justify-center mt-5 space-x-3">
              <div className="w-3 h-3 rounded-full bg-black" />
              <p className="text-black sm:text-lg">
                Browse our selected projects below
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center md:px-10 mt-10 md:mt-0">
            <p className="text-black sm:text-lg">Learn more about us</p>
            <Button variant="line" size="line">
              ABOUT GEN Y SOLUTIONS
              <ArrowUpRight className="ml-3" color="black" />
            </Button>
          </div>

          <div className="flex flex-col items-start justify-center md:px-10">
            <p className="mb-4 font-medium text-[18px] mt-8 md:mt-0">Areas</p>
            <div className="space-y-2 items-start flex flex-col">
              <p className="font-normal">Artificial Intelligence</p>
              <p className="font-normal">Custom Chatbots</p>
              <p className="font-normal">AI Driven Analytics</p>
              <p className="font-normal">Custom AI Solutions</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="w-full hidden md:block">
        <ProjectsGallery />
      </div>

      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center">
        <div className="md:hidden w-full">
          <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 w-full md:justify-between items-center">
            <Link href="project">
              <div className="flex flex-col w-full">
                <div className="relative w-full h-[330px] object-cover">
                  <Image
                    className="rounded-[15px]"
                    fill
                    src="/maven.jpg"
                    alt="Project 1"
                  />
                </div>
                <h4 className=" text-xl lg:text-4xl font-medium text-start mt-6 md:mt-10">
                  MAVEN 11
                </h4>
                <div className="flex flex-col space-y-4">
                  <p className="text-black text-lg text-start">
                    New web design for the blockchain investment fund Maven 11.
                  </p>
                  <p className="text-black/40 text-md text-start">2022</p>
                </div>
                <p></p>
              </div>
            </Link>

            <Link href="project">
              <div className="flex flex-col w-full">
                <div className="relative w-full h-[330px] object-cover">
                  <Image
                    className="rounded-[15px]"
                    fill
                    src="/wix.jpg"
                    alt="Project 2"
                  />
                </div>
                <h4 className=" text-xl lg:text-4xl font-medium text-start mt-6 md:mt-10">
                  Wix Playground Homepage
                </h4>
                <div className="flex flex-col space-y-4">
                  <p className="text-black text-lg text-start">
                    Wix Playground is powered by the Wix.com design team.
                  </p>
                  <p className="text-black/40 text-md text-start">2022</p>
                </div>
                <p></p>
              </div>
            </Link>
          </div>

          <Link href="project">
            <div className="flex flex-col w-full mt-10">
              <div className="relative w-full h-[330px] object-cover">
                <Image
                  className="rounded-[15px] border border-black/20"
                  fill
                  src="/powell.jpg"
                  alt="Project 3"
                />
              </div>
              <h4 className=" text-xl lg:text-4xl font-medium text-start mt-6 md:mt-10">
                POWELL—STUDIO
              </h4>
              <div className="flex flex-col space-y-4">
                <p className="text-black text-lg text-start">
                  The online presence for Powell—Studio.
                </p>
                <p className="text-black/40 text-md text-start">2023</p>
              </div>
              <p></p>
            </div>
          </Link>

          <Link href="project">
            <div className="flex flex-col w-full space-y-10 justify-between items-start mt-10">
              <div className="flex flex-col w-full">
                <div className="relative w-full h-[330px] object-cover">
                  <Image
                    className="rounded-[15px]"
                    fill
                    src="/panda.jpg"
                    alt="Project 4"
                  />
                </div>
                <h4 className=" text-xl lg:text-4xl font-medium text-start mt-6 md:mt-10">
                  ROCKETPANDA
                </h4>
                <div className="flex flex-col space-y-4">
                  <p className="text-black text-lg text-start">
                    An Italian animation studio.
                  </p>
                  <p className="text-black/40 text-md text-start">2022</p>
                </div>
                <p></p>
              </div>

              <div className="flex flex-col w-full">
                <div className="relative w-full h-[330px] object-cover">
                  <Image
                    className="rounded-[15px]"
                    fill
                    src="/c2.jpg"
                    alt="Project 5"
                  />
                </div>
                <h4 className=" text-xl lg:text-4xl font-medium text-start mt-6 md:mt-10">
                  C2 Montreal
                </h4>
                <div className="flex flex-col space-y-4">
                  <p className="text-black text-lg text-start">
                    C2 Montreal is Canada&apos;s premier creative-business
                    event.
                  </p>
                  <p className="text-black/40 text-md text-start">2021</p>
                </div>
                <p></p>
              </div>
            </div>
          </Link>
        </div>
      </MaxWidthWrapper>
      <div className="hidden md:block">
        <div className="flex w-full items-center justify-center mb-28 md:mb-40 mt-40">
          <div className="cursor-pointer circular-button-black">
            <Image
              width={185}
              height={185}
              src="/allprojects.png"
              alt="View all projects"
            />
            <ArrowUpRight id="arrow" width={34} height={34} color="black" />
          </div>
        </div>
      </div>

      <div className="md:hidden mt-20">
        <Link href="/works">
          <div className="flex w-full items-center justify-center mb-28 md:mb-40">
            <div className="cursor-pointer circular-button-black">
              <Image
                className="md:hidden"
                width={165}
                height={165}
                src="/allprojects.png"
                alt="View all projects"
              />
              <ArrowUpRight id="arrow" width={34} height={34} color="black" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingWork;
