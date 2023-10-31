import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

const LandingTeam = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center pt-[15rem] pb-[15rem]">
        <div className="w-full flex flex-col md:flex-row ">
          <div className="flex flex-row items-start justify-start space-x-3 w-[280px]">
            <div className="w-3 h-3 mt-[5px] rounded-full bg-black" />
            <p className="text-black sm:text-lg uppercase">Meet the team</p>
          </div>
          <div className="md:ml-60 flex flex-col w-full mt-5 md:mt-0">
            <div className="flex flex-row w-full items-center md:items-start justify-between">
              <h2 className="text-5xl lg:text-6xl font-medium">Our Team</h2>
              <p>2018-2023</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-12 md:mt-20">
              <div className="flex flex-col items-start mt-0 md:mt-0">
                <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
                  <Image
                    width={170}
                    height={170}
                    src="/images/member1.png"
                    alt="Team member"
                  />
                </div>
                <h3 className="text-3xl mt-2 md:mt-6">Yaw Bawuah</h3>
                <p className="text-lg text-zinc-500">Senior Developer</p>
              </div>

              <div className="flex flex-col items-start mt-10 md:mt-0">
                <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
                  <Image
                    width={240}
                    height={240}
                    src="/images/member2.png"
                    alt="Team member"
                  />
                </div>
                <h3 className="text-3xl mt-2 md:mt-6">Yaw Bawuah</h3>
                <p className="text-lg text-zinc-500">Senior Developer</p>
              </div>

              <div className="flex flex-col items-start mt-10 md:mt-0">
                <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
                  <Image
                    width={170}
                    height={170}
                    src="/images/member3.png"
                    alt="Team member"
                  />
                </div>
                <h3 className="text-3xl mt-2 md:mt-6">Yaw Bawuah</h3>
                <p className="text-lg text-zinc-500">Senior Developer</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between md:mt-20">
              <div className="flex flex-col items-start mt-10 md:mt-0">
                <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
                  <Image
                    width={170}
                    height={170}
                    src="/images/member4.png"
                    alt="Team member"
                  />
                </div>
                <h3 className="text-3xl mt-2 md:mt-6">Yaw Bawuah</h3>
                <p className="text-lg text-zinc-500">Senior Developer</p>
              </div>

              <div className="flex flex-col items-start mt-10 md:mt-0">
                <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
                  <Image
                    width={240}
                    height={240}
                    src="/images/member5.png"
                    alt="Team member"
                  />
                </div>
                <h3 className="text-3xl mt-2 md:mt-6">Yaw Bawuah</h3>
                <p className="text-lg text-zinc-500">Senior Developer</p>
              </div>

              <div className="flex flex-col items-start mt-10 md:mt-0">
                <div className="flex items-center justify-center w-full md:w-[400px] h-[400px] bg-gray-200 rounded-[20px]">
                  <Image
                    width={170}
                    height={170}
                    src="/images/member6.png"
                    alt="Team member"
                  />
                </div>
                <h3 className="text-3xl mt-2 md:mt-6">Yaw Bawuah</h3>
                <p className="text-lg text-zinc-500">Senior Developer</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingTeam;
