import { MoveDown } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center pt-[8rem] md:pt-[15rem]">
        <div className="z-10 items-center md:items-start justify-between flex flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-primary md:-mt-0 text-start">
            Privacy
          </h1>
        </div>

        <div className="border border-black/10 w-full my-5 md:my-10" />

        <div className="z-10 items-start justify-between flex flex-col md:flex-row w-full">
          <h1 className="max-w-5xl text-5xl font-medium md:text-6xl lg:text-[96px] lg:leading-[1.2] text-black md:-mt-0 text-start">
            & Cookie Policy
          </h1>
          <p className="mt-2 md:mt-5 max-w-full text-start text-lg text-black uppercase">
            Last updated: <br className="hidden md:block" /> 3rd November 2023
          </p>
        </div>

        <div className="border border-black/10 w-full my-5 md:my-10" />

        <Link href="#policystart">
          <div className="flex flex-row items-center space-x-5 mt-6 md:mt-12 cursor-pointer">
            <div className="flex items-center justify-center border border-black rounded-full h-16 w-10">
              <MoveDown className="arrow-icon-down" color="black" />
            </div>
            <p className="text-black">Scroll to Policy</p>
          </div>
        </Link>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="flex flex-col items-start text-start pt-[5rem] md:pt-[12rem] md:pb-[16rem]">
        <div
          id="policystart"
          className="flex flex-col md:flex-row w-full pt-[3rem]"
        >
          <div className="flex flex-col w-full md:w-[35%] font-medium text-lg gap-4">
            <h4 className="text-black hover:text-primary transition-all text-lg md:text-xl cursor-pointer">
              Introduction
            </h4>
            <h4 className="text-black hover:text-primary transition-all text-lg md:text-xl cursor-pointer">
              Information We Collect
            </h4>
            <h4 className="text-black hover:text-primary transition-all text-lg md:text-xl cursor-pointer">
              How We Use Your Information
            </h4>
            <h4 className="text-black hover:text-primary transition-all text-lg md:text-xl cursor-pointer">
              Data Security
            </h4>
            <h4 className="text-black hover:text-primary transition-all text-lg md:text-xl cursor-pointer">
              Sharing Your Information
            </h4>
            <h4 className="text-black hover:text-primary transition-all text-lg md:text-xl cursor-pointer">
              Changes to This Privacy Policy
            </h4>
            <h4 className="text-black hover:text-primary transition-all text-lg md:text-xl cursor-pointer">
              Contact Us
            </h4>
          </div>

          <div className="flex flex-col w-full mt-20 mb-32 md:mt-0 md:mb-0">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                Introduction
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                Welcome to Gen Y Solutions. We are committed to protecting your
                privacy and safeguarding your personal information. This Privacy
                Policy explains how we collect, use, disclose, and protect your
                personal information when you interact with our website,
                products, and services. By using our website and services, you
                consent to the practices described in this Privacy Policy.
              </p>
            </div>

            <div className="flex flex-col mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                Information We Collect
              </h2>
              <p className="text-lg md:text-xl text-black/70 mt-4">
                We may collect and process the following types of personal
                information:
              </p>
              <p className="text-lg md:text-xl text-black/70 mt-6">
                <b className="text-black">Contact Information:</b> This includes
                your name, email address, phone number, and postal address,
                which we collect when you communicate with us or use our
                services.
              </p>

              <p className="text-lg md:text-xl text-black/70 mt-6">
                <b className="text-black">Usage Information:</b> We may collect
                information about how you interact with our website and
                services, such as IP addresses, device information, browser
                type, and pages visited. This data helps us improve our services
                and customise your user experience.
              </p>

              <p className="text-lg md:text-xl text-black/70 mt-6">
                <b className="text-black">Account Information:</b> If you create
                an account with us, we collect and store information such as
                your username, password, and preferences.
              </p>
            </div>

            <div className="flex flex-col mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                How We Use Your Information
              </h2>
              <p className="text-lg md:text-xl text-black/70 mt-4">
                We use your personal information for the following purposes:
              </p>
              <p className="text-lg md:text-xl text-black/70 mt-6">
                <b className="text-black">Providing Services:</b> We use your
                information to deliver the products and services you request,
                including processing orders and providing customer support.
              </p>

              <p className="text-lg md:text-xl text-black/70 mt-6">
                <b className="text-black">Improving Services:</b> We may analyse
                usage data to enhance our website and services, tailor content
                to your preferences, and develop new features.
              </p>

              <p className="text-lg md:text-xl text-black/70 mt-6">
                <b className="text-black">Communication:</b> We may use your
                contact information to send you updates, promotional offers,
                newsletters, and important announcements. You can opt-out of
                these communications at any time.
              </p>

              <p className="text-lg md:text-xl text-black/70 mt-6">
                <b className="text-black">Legal Compliance:</b> We may process
                your data to comply with legal obligations and respond to lawful
                requests from government authorities.
              </p>
            </div>

            <div className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                Data Security
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                We are committed to protecting your personal information. We
                employ industry-standard security measures to safeguard your
                data against unauthorised access, disclosure, alteration, and
                destruction. However, please be aware that no method of data
                transmission over the internet is entirely secure, and we cannot
                guarantee the absolute security of your information.
              </p>
            </div>

            <div className="flex flex-col mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                Sharing Your Information
              </h2>
              <p className="text-lg md:text-xl text-black/70 mt-4">
                We do not sell your personal information to third parties.
                However, we may share your data with trusted third parties for
                the following purposes:
              </p>
              <p className="text-lg md:text-xl text-black/70 mt-6">
                <b className="text-black">Service providers:</b> We may share
                information with trusted third-party service providers who
                assist us in operating our website and providing our services.
              </p>

              <p className="text-lg md:text-xl text-black/70 mt-6">
                <b className="text-black">Legal requirements:</b> We may
                disclose your information to comply with legal obligations or to
                protect our rights, privacy, safety, or property, and those of
                our customers and the public.
              </p>
            </div>

            <div className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                Changes to This Privacy Policy
              </h2>
              <p className="text-lg md:text-xl text-black/70">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for legal reasons. We recommend that
                you review this policy periodically.
              </p>
            </div>

            <div className="flex flex-col space-y-4 mt-12">
              <h2 className="text-3xl md:text-4xl text-black font-medium">
                Contact Us
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

export default PrivacyPolicy;
