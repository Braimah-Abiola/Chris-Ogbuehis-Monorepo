import { MoveDown } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center pt-[8rem] md:pt-[15rem]">
        <div className="z-10 items-center md:items-start justify-between flex flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-primary md:-mt-0 text-start">
            Terms
          </h1>
        </div>

        <div className="border border-black/10 w-full my-5 md:my-10" />

        <div className="z-10 items-start justify-between flex flex-col md:flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-black md:-mt-0 text-start">
            & Conditions
          </h1>
          <p className="mt-4 md:mt-5 max-w-full text-start md:text-lg text-black uppercase">
            Last updated: <br className="hidden md:block" /> 3rd November 2023
          </p>
        </div>

        <div className="border border-black/10 w-full my-5 md:my-10" />

        <Link href="#policy">
          <div className="flex flex-row items-center space-x-5 mt-6 md:mt-12 cursor-pointer">
            <div className="flex items-center justify-center border border-black rounded-full h-16 w-10">
              <MoveDown className="arrow-icon-down" color="black" />
            </div>
            <p className="text-black">Scroll to Policy</p>
          </div>
        </Link>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="flex flex-col items-start text-start pt-[5rem] md:pt-[15rem] md:pb-[16rem]">
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col w-full md:w-[35%] font-medium text-lg gap-4">
            <Link href="#policy">
              <h4 className=" text-xl md:text-xl">1. Acceptance of Terms</h4>
            </Link>
            <Link href="#2">
              <h4 className=" text-xl md:text-xl">2. Use of the Website</h4>
            </Link>
            <Link href="#3">
              <h4 className=" text-xl md:text-xl">3. Intellectual Property</h4>
            </Link>
            <Link href="#4">
              <h4 className=" text-xl md:text-xl">4. Privacy Policy</h4>
            </Link>
            <Link href="#5">
              <h4 className=" text-xl md:text-xl">
                5. Links to Third-Party Websites
              </h4>
            </Link>
            <Link href="#6">
              <h4 className=" text-xl md:text-xl">
                6. Disclaimer of Warranties
              </h4>
            </Link>
            <Link href="#7">
              <h4 className=" text-xl md:text-xl">
                7. Limitation of Liability
              </h4>
            </Link>
            <Link href="#8">
              <h4 className=" text-xl md:text-xl">
                8. Changes to Terms and Conditions
              </h4>
            </Link>
            <Link href="#9">
              <h4 className=" text-xl md:text-xl">9. Contact Us</h4>
            </Link>
          </div>

          <div className="flex flex-col w-full mt-20 mb-32 md:mt-0 md:mb-0">
            <div id="policy" className="flex flex-col space-y-4">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                1. Acceptance of Terms
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                By accessing and using our website (genysolutions.com), you
                agree to comply with and be bound by these Terms and Conditions.
                If you do not agree to these terms, please do not use the
                Website.
              </p>
            </div>

            <div id="2" className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                2. Use of the Website
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                Gen Y Solutions grants you a limited, non-exclusive, and
                revocable license to access and use the Website for
                informational and non-commercial purposes.
              </p>
            </div>

            <div id="3" className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                3. Intellectual Property
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                <b className="text-black font-medium">Copyright:</b> All content
                on the Website, including text, graphics, logos, and software,
                is the property of Webandcrafts and is protected by copyright
                laws.
              </p>

              <p className="text-lg md:text-xl text-black/70 mt-4">
                <b className="text-black font-medium">Trademarks:</b> Any
                trademarks or logos used on the Website are the property of
                Webandcrafts or their respective owners.
              </p>
            </div>

            <div id="4" className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                4. Privacy Policy
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                Your use of the Website is also governed by our{" "}
                <Link href="/privacy-policy">
                  <span className="underline">Privacy Policy</span>
                </Link>
                .
              </p>
            </div>

            <div id="5" className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                5. Links to Third-Party Websites
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                The Website may contain links to third-party websites. Gen Y
                Solutions is not responsible for the content or practices of
                these websites. You access them at your own risk.
              </p>
            </div>

            <div id="6" className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                6. Disclaimer of Warranties
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                The Website is provided &apos;as is&apos; and &apos;as
                available&apos; without warranties of any kind, including, but
                not limited to, the implied warranties of merchantability,
                fitness for a particular purpose, or non-infringement.
              </p>

              <p className="text-lg md:text-xl text-black/70 mt-4">
                Gen Y Solutions does not guarantee the accuracy, completeness,
                or reliability of any information on the Website.
              </p>
            </div>

            <div id="7" className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                7. Limitation of Liability
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                In no event shall Gen Y Solutions be liable for any direct,
                indirect, special, incidental, or consequential damages arising
                out of or in connection with your use or inability to use the
                Website.
              </p>
            </div>

            <div id="8" className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                8. Changes to Terms and Conditions
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                Gen Y Solutions reserves the right to modify these Terms and
                Conditions at any time. It is your responsibility to check for
                updates periodically.
              </p>
            </div>

            <div id="9" className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                9. Contact Us
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                If you have any questions, concerns, or requests related to your
                personal information or this Privacy Policy, please contact us
                at{" "}
                <span className="underline">
                  <a href="mailto:info@genysolutions.com?subject=Privacy Policy Info">
                    info@genysolutions.com
                  </a>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TermsAndConditions;
