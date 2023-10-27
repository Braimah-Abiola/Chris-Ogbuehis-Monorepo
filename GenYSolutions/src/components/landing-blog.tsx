import MaxWidthWrapper from "./MaxWidthWrapper";

import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import WorkSlider from "./work-slider";
import Image from "next/image";
import LandingFooter from "./landing-footer";

const LandingBlog = () => {
  return (
    <div className="pt-[15rem]">
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center mb-40 gap-32 relative">
        <Button className="bg-[#F4F4F4]">BLOG</Button>
        <div className="w-[748.03px] flex flex-col gap-10 mb-25">
          <p className="text-[68px]">
            Play the real-life city exploration games in Vidin, Vratsa, and
            Belogradchik
          </p>
          <div className="text-[#808080] text-[18px] flex gap-5 justify-center">
            <span>6 min read</span>
            <span>|</span>
            <span>Jan 18, 2023</span>
          </div>
        </div>

        <div className="relative w-full md:w-[100%] h-fit md:h-[760px]">
          <Image fill src="/project3.png" alt="Project 1" />
        </div>

        <div className="w-[640px] text-left">
          <p>
            Traveling to the medieval towns of
            <strong> Vidin</strong>,<strong> Vratsa </strong>
            or
            <strong> Belogradchik </strong>
            soon? Real-life city exploration games await there to usher you into
            the unknown and magnificent historical sites of Northwestern
            Bulgaria.
          </p>
          <p>
            Surely you’ve wandered about beautiful cities, wanting to know more
            about the myths surrounding their history without having to research
            online. But have you ever wanted to discover the secrets of a place
            by playing a real-world exploration game?
          </p>
          <p>
            On the Questo mobile app, gamified tours in the cities of
            <strong> Belogradchik</strong>, <strong> Vidin</strong>, and{" "}
            <strong> Vratsa </strong> now take you down a trip, literally, to
            reveal pieces of rich history that just need a little bit of
            unraveling to be appreciated fully.
          </p>
        </div>

        <div className="relative w-full md:w-[600px] h-fit md:h-[600px]">
          <Image fill src="/project4.png" alt="Project 1" />
        </div>

        <div className="w-[640px] text-left">
          <p>
            Traveling to the medieval towns of
            <strong> Vidin</strong>,<strong> Vratsa </strong>
            or
            <strong> Belogradchik </strong>
            soon? Real-life city exploration games await there to usher you into
            the unknown and magnificent historical sites of Northwestern
            Bulgaria.
          </p>
          <p>
            Surely you’ve wandered about beautiful cities, wanting to know more
            about the myths surrounding their history without having to research
            online. But have you ever wanted to discover the secrets of a place
            by playing a real-world exploration game?
          </p>
          <p>
            On the Questo mobile app, gamified tours in the cities of
            <strong> Belogradchik</strong>, <strong> Vidin</strong>, and{" "}
            <strong> Vratsa </strong> now take you down a trip, literally, to
            reveal pieces of rich history that just need a little bit of
            unraveling to be appreciated fully.
          </p>
        </div>

        <div className="relative w-full md:w-[600px] h-fit md:h-[600px]">
          <Image fill src="/project4.png" alt="Project 1" />
        </div>
        <Button className="absolute bottom-0 right-10">Return to blog</Button>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="pt-14 flex flex-col items-center justify-center text-center mb-40 gap-32 relative border-t">
        <div className="flex flex-col gap-10">
          <p className="text-[32px]">Share on:</p>
          <div className="flex items-center gap-10">
            <Button className="bg-[#F4F4F4] rounded-[50%] p-5">
              <Image src="/linkdin.png" alt="linkedin" width={30} height={30} />
            </Button>
            <Button className="bg-[#F4F4F4] rounded-[50%] p-5">
              <Image src="/behance.png" alt="linkedin" width={30} height={30} />
            </Button>
            <Button className="bg-[#F4F4F4] rounded-[50%] p-5">
              <Image src="/dribble.png" alt="linkedin" width={30} height={30} />
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          <h2 className="text-[85px]">Keep exploring</h2>
          <div className="flex gap-10">
            <div className="w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between">
              <div className="relative w-full md:w-[100%] h-fit md:h-[300px] object-cover">
                <Image fill src="/project4.png" alt="Project 1" />
              </div>
              <div className="px-5 text-[25px] text-left">
                <p>Play the real-life city exploration games in Vidin,</p>
              </div>
              <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                <span>Blog</span>
                <span>Jan 18, 2023</span>
              </div>
            </div>
            <div className="w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between">
              <div className="relative w-full md:w-[100%] h-fit md:h-[300px] object-cover">
                <Image fill src="/project4.png" alt="Project 1" />
              </div>
              <div className="px-5 text-[25px] text-left">
                <p>Play the real-life city exploration games in Vidin,</p>
              </div>
              <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                <span>Blog</span>
                <span>Jan 18, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <LandingFooter />
    </div>
  );
};

export default LandingBlog;
