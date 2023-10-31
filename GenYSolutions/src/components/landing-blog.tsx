import MaxWidthWrapper from "./MaxWidthWrapper";

import { Button } from "./ui/button";
import Image from "next/image";
import LandingFooter from "./landing-footer";

const LandingBlog = () => {
  return (
    <div className="pt-[10rem] md:pt-[12rem]">
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center relative">
        <Button
          size="sm"
          className="bg-[#F4F4F4] h-10 w-fit px-5 md:px-7 font-normal"
        >
          BLOG
        </Button>
        <div className="w-full md:w-[748.03px] flex flex-col mb-20">
          <h2 className=" text-5xl md:text-[68px] mt-4 md:mt-5">
            Play the real-life city exploration games in Vidin, Vratsa, and
            Belogradchik
          </h2>
          <div className="text-[#808080] text-[18px] flex mt-8 md:mt-5 gap-5 justify-center">
            <span>6 min read</span>
            <span>|</span>
            <span>Jan 18, 2023</span>
          </div>
        </div>

        <div className="relative w-full md:w-[100%] h-[260px] md:h-[760px]">
          <Image fill src="/project3.png" alt="Project 1" />
        </div>

        <div className=" w-full md:w-[640px] text-left mt-5 md:mt-20">
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
            Surely you&apos;ve wandered about beautiful cities, wanting to know
            more about the myths surrounding their history without having to
            research online. But have you ever wanted to discover the secrets of
            a place by playing a real-world exploration game?
          </p>
          <p>
            On the Questo mobile app, gamified tours in the cities of
            <strong> Belogradchik</strong>, <strong> Vidin</strong>, and{" "}
            <strong> Vratsa </strong> now take you down a trip, literally, to
            reveal pieces of rich history that just need a little bit of
            unraveling to be appreciated fully.
          </p>
        </div>

        <div className="relative w-full md:w-[600px] h-[385px] md:h-[600px] mt-5 md:mt-20">
          <Image fill src="/project4.png" alt="Project 1" />
        </div>

        <div className=" w-full md:w-[640px] text-left mt-5 md:mt-20">
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

        <div className="relative w-full md:w-[600px] h-[385px] md:h-[600px] mt-5 md:mt-20">
          <Image fill src="/project4.png" alt="Project 1" />
        </div>
        <div className="hidden md:block">
          <Button className="absolute md:bottom-0 md:right-10">
            Return to blog
          </Button>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="pt-14 flex flex-col items-center justify-center text-center mb-40 gap-32 relative border-t mt-20 md:mt-20">
        <div className="flex flex-col gap-10">
          <p className="text-[22px] md:text-[28px]">Share on:</p>
          <div className="flex items-center gap-10">
            <Button
              size="icon"
              className="bg-[#F4F4F4] w-16 h-16 rounded-[50%] p-5"
            >
              <Image src="/linkdin.png" alt="linkedin" width={30} height={30} />
            </Button>
            <Button
              size="icon"
              className="bg-[#F4F4F4] w-16 h-16 rounded-[50%] p-5"
            >
              <Image src="/behance.png" alt="linkedin" width={30} height={30} />
            </Button>
            <Button
              size="icon"
              className="bg-[#F4F4F4] w-16 h-16 rounded-[50%] p-5"
            >
              <Image src="/dribble.png" alt="linkedin" width={30} height={30} />
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-20">
          <h2 className=" text-5xl md:text-[64px]">Keep exploring</h2>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between">
              <div className="relative w-full md:w-[100%] h-[300px] md:h-[300px] object-cover">
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
              <div className="relative w-full md:w-[100%] h-[300px] md:h-[300px] object-cover">
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
