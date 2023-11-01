import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const LandingBlogs = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center text-center pt-10 md:pt-40 pb-60 md:pb-40">
      <div className="z-10 items-start justify-between flex flex-col md:flex-row w-full">
        <div className="flex flex-col">
          <h1 className=" text-start max-w-5xl text-5xl font-semibold md:text-6xl lg:text-7xl lg:leading-[1.2] text-black">
            Read what <br />
            excites,
            <br /> achieves and
            <br /> moves us
          </h1>

          {/* <BlogToogle activeOption="monthly"/> */}
        </div>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 mt-20 md:mt-0">
          <div className="flex flex-col space-y-5 md:space-y-10">
            <Link href="/blog">
              <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
                <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                  <Image fill src="/c2.jpg" alt="Project 1" />
                </div>
                <div className="px-5 text-[25px] text-left">
                  <p>Play the real-life city exploration games in Vidin,</p>
                </div>
                <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                  <span>Blog</span>
                  <span>Jan 18, 2023</span>
                </div>
              </div>
            </Link>

            <Link href="/blog">
              <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
                <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                  <Image fill src="/panda.jpg" alt="Project 1" />
                </div>
                <div className="px-5 text-[25px] text-left">
                  <p>Play the real-life city exploration games in Vidin,</p>
                </div>
                <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                  <span>Blog</span>
                  <span>Jan 18, 2023</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col space-y-5 md:space-y-10 md:mt-20">
            <Link href="/blog">
              <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
                <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                  <Image fill src="/powell.jpg" alt="Project 1" />
                </div>
                <div className="px-5 text-[25px] text-left">
                  <p>Play the real-life city exploration games in Vidin,</p>
                </div>
                <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                  <span>Blog</span>
                  <span>Jan 18, 2023</span>
                </div>
              </div>
            </Link>

            <Link href="/blog">
              <div className="w-full md:w-[370px] h-[500px] rounded-[15px] border overflow-hidden flex flex-col justify-between hover:border-black/40 hover:text-black transition-all">
                <div className="relative w-full md:w-full object-cover h-[280px] md:h-[280px]">
                  <Image fill src="/wix.jpg" alt="Project 1" />
                </div>
                <div className="px-5 text-[25px] text-left">
                  <p>Play the real-life city exploration games in Vidin,</p>
                </div>
                <div className="flex justify-between items-center w-[100%] px-5 pb-5 font-thin">
                  <span>Blog</span>
                  <span>Jan 18, 2023</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingBlogs;
