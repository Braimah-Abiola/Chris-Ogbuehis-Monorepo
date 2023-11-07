import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

const LandingClients = () => {
  return (
    <MaxWidthWrapper className="bg-[#0D0B0E] -mt-1 py-40 md:py-60 flex flex-col items-start justify-center text-center">
      <div className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-20 md:items-end">
        <h2 className="text-white text-5xl md:text-6xl font-semibold text-start">
          Companies who
          <br />
          trust Gen Y Solutions
        </h2>
        <p className="text-white text-start text-lg">
          We are proud to be the trusted custom AI software provider
          <br className="hidden md:block" /> for companies that strive for
          excellence.
        </p>
      </div>

      <div className="md:hidden w-full flex flex-col px-5">
        <div className="flex flex-row w-full justify-between items-center mt-20">
          <Image
            width={140}
            height={30}
            src="/cbre.png"
            alt="Cbre Logo"
          />
          <Image
            width={140}
            height={30}
            src="/akelius.png"
            alt="Akelius Logo"
          />
        </div>
        <div className="flex flex-row w-full justify-between items-center mt-0">
          <Image
            width={140}
            height={30}
            src="/colliers.png"
            alt="Colliers Logo"
          />
          <Image
            width={140}
            height={30}
            src="/autogridwhite.png"
            alt="Autogrid Logo"
          />
        </div>
        <div className="flex flex-row w-full justify-between items-center mt-0">
          <Image
            width={140}
            height={30}
            src="/firstservice.png"
            alt="Cbre Logo"
          />
          <Image
            width={140}
            height={30}
            src="/gedigitalwhite.png"
            alt="Cbre Logo"
          />
        </div>
        <div className="flex flex-row w-full justify-between items-center mt-0">
          <Image
            width={140}
            height={30}
            src="/nextera.png"
            alt="Cbre Logo"
          />
          <Image
            width={140}
            height={30}
            src="/energyhub.png"
            alt="Cbre Logo"
          />
        </div>
        <div className="flex flex-row w-full justify-between items-center mt-0">
          <Image
            width={140}
            height={30}
            src="/bentall.png"
            alt="Cbre Logo"
          />
          <Image width={140} height={30} src="/lg.png" alt="Cbre Logo" />
        </div>
      </div>

      <div className="hidden md:block w-full">
        <div className="flex flex-row w-full justify-between items-start mt-40">
          <Image
            width={180}
            height={45}
            src="/cbre.png"
            alt="Cbre Logo"
          />
          <Image
            width={180}
            height={45}
            src="/colliers.png"
            alt="Colliers Logo"
          />
          <Image
            width={180}
            height={45}
            src="/firstservice.png"
            alt="Cbre Logo"
          />
          <Image
            width={180}
            height={45}
            src="/nextera.png"
            alt="Cbre Logo"
          />
          <Image
            width={180}
            height={45}
            src="/bentall.png"
            alt="BentallGreenOak Logo"
          />
        </div>
        <div className="flex flex-row w-full justify-between items-start mt-12">
          <Image
            width={180}
            height={45}
            src="/akelius.png"
            alt="Cbre Logo"
          />
          <Image
            width={180}
            height={45}
            src="/autogridwhite.png"
            alt="Colliers Logo"
          />
          <Image
            width={180}
            height={45}
            src="/gedigitalwhite.png"
            alt="Cbre Logo"
          />
          <Image
            width={180}
            height={45}
            src="/energyhub.png"
            alt="Cbre Logo"
          />
          <Image
            width={180}
            height={45}
            src="/lg.png"
            alt="BentallGreenOak Logo"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingClients;
