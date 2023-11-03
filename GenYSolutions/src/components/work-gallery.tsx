import { PROJECTS } from "@/constants/images";
import Double from "./double";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

const WorkGallery = () => {
  return (
    <div>
      <div className="gallery md:mb-60 hidden md:block">
        <Double projects={[PROJECTS[0], PROJECTS[1]]} reversed={false} />
        <Double projects={[PROJECTS[2], PROJECTS[3]]} reversed={true} />
        <Double projects={[PROJECTS[4], PROJECTS[5]]} reversed={false} />
      </div>

      <div className="md:hidden">
        <MaxWidthWrapper className="flex flex-col items-start justify-center text-center py-20">
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
                      New web design for the blockchain investment fund Maven
                      11.
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
      </div>
    </div>
  );
};

export default WorkGallery;
