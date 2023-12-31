import { MoveDown } from "lucide-react";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import LandingFooter from "./landing-footer";
import Link from "next/link";

const ProjectDeorg = () => {
  return (
    <div>
      <div className="md:hidden">
        <div className="relative w-full h-[300px]">
          <Image fill src="/banner.png" alt="Project banner" />
        </div>
      </div>
      <div className="hidden md:block">
        <MaxWidthWrapper className="flex flex-col items-center justify-center text-center h-screen">
          <div className="absolute object-cover z-0 w-auto min-h-screen min-w-full md:max-w-none">
            <Image fill src="/banner.png" alt="Project banner" />
          </div>

          <Link href="#start">
            <div className="mx-auto w-fit max-w-fit px-5 md:px-20 bottom-5 md:bottom-14 md:left-0 absolute flex flex-row items-center space-x-5">
              <div className="flex items-center justify-center border-2 border-black rounded-full h-16 w-10">
                <MoveDown className="arrow-icon-down" color="black" />
              </div>
              <p className="text-black hidden md:block">
                Scroll to Discover DeOrg
              </p>
            </div>
          </Link>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper className="py-10 md:py-28 flex flex-col items-start bg-white">
        <div id="start" className="md:pt-12">
          <h1 className="text-start text-4xl lg:text-6xl font-medium mt-10 md:mt-0">
            DeOrg is AI community software <br className="hidden md:block" />{" "}
            that structures the new way digital{" "}
            <br className="hidden md:block" />
            communities organize and interact.
          </h1>

          <div className="w-full flex flex-col md:flex-row space-x-0 space-y-8 md:space-y-0 md:space-x-28 mt-10 md:mt-20">
            <div className="flex flex-col">
              <p className="text-lg md:text-xl text-black/50">Year:</p>
              <h4 className="text-xl mt-4">2023</h4>
            </div>

            <div className="flex flex-col">
              <p className="text-lg md:text-xl text-black/50">Tags:</p>
              <h4 className="text-xl mt-4">Tech, AI, Web3</h4>
            </div>

            <div className="flex flex-col">
              <p className="text-lg md:text-xl text-black/50">Project Scope:</p>
              <h4 className="text-xl mt-4">
                Landing Page Design, Artificial Intelligence{" "}
                <br className="hidden md:block" /> Chatbot
              </h4>
            </div>
          </div>

          <div className="py-12 md:py-32">
            <Image
              className="rounded-[20px]"
              width={2048}
              height={1080}
              src="/deorg.png"
              alt="Deorg logo"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between">
            <div className="w-full">
              <p className="text-xl text-black/50"> Project Description:</p>
            </div>

            <div className="w-full flex flex-col mt-4 md:mt-0">
              <h3 className="text-xl md:text-2xl text-black">
                In the dynamic realm of Web3 startups, DeOrg pioneers a new era
                in digital community organization.
              </h3>
              <h3 className="text-xl md:text-2xl text-black mt-4">
                The journey is guided by a vision of inclusivity and innovation,
                encapsulated in a versatile brand identity. Central to DeOrg is
                our modern logotype and unique logo mark. The sleek logotype
                embodies professionalism and modernity, reflecting our
                commitment to cutting-edge community solutions. The logo mark,
                featuring interconnected bubbles forming &apos;D&apos;,
                symbolizes the cohesive nature of digital communities,
                emphasizing theirs vibrant, interconnected system.
              </h3>
              <h3 className="text-xl md:text-2xl text-black mt-4">
                Our brand identity&apos;s color palette - grey, white, pink,
                purple, and green - reinforces DeOrgs personality: innovative,
                inclusive, and forward-thinking.
              </h3>
            </div>
          </div>

          <div className="py-12 md:py-32">
            <Image
              className="rounded-[20px]"
              width={2048}
              height={1080}
              src="/deorg_branding.jpg"
              alt="Deorg branding typefacec"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <LandingFooter />
    </div>
  );
};

export default ProjectDeorg;
