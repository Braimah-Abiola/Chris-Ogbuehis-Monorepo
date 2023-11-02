import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const Recognition = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center pt-[15rem] pb-[15rem]">
        <div className="w-full flex flex-col md:flex-row ">
          <div className="flex flex-row items-start justify-start space-x-3 w-[280px]">
            <div className="w-3 h-3 mt-[5px] rounded-full bg-black" />
            <p className="text-black sm:text-lg uppercase">Awards</p>
          </div>
          <div className="md:ml-60 flex flex-col w-full mt-5 md:mt-0">
            <div className="flex flex-row w-full items-center md:items-start justify-between">
              <h2 className="text-5xl lg:text-6xl font-medium">
                Recognitions & Awards
              </h2>
            </div>
            <div className="mt-20 border-t w-full py-8">
              <div className="flex flex-row justify-between w-full items-center">
                <h4 className="text-xl">Custom Production</h4>
                <p>Graphics Design</p>
                <p>Behance</p>
                <Button variant="outline">
                  View <ArrowUpRight className="ml-4" />
                </Button>
              </div>
            </div>
            <div className="border-t w-full py-8">
              <div className="flex flex-row justify-between w-full items-center">
                <h4 className="text-xl">Custom Production Georgia</h4>
                <p>Graphics Design</p>
                <p>Behance</p>
                <Button variant="outline">
                  View <ArrowUpRight className="ml-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Recognition;
