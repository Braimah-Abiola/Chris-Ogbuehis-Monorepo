import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

const ContactForm = () => {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-start justify-center text-center py-32">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-start justify-start space-x-3">
              <div className="w-3 h-3 rounded-full mt-[5px] bg-black" />
              <p className="max-w-[28ch] text-start uppercase text-[18px]">
                Share your problems with us and get back beautifully designed AI
                solutions that impress and engage
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full mt-10 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between space-x-0 space-y-10 md:space-y-0 md:space-x-10">
              <div className="flex flex-col items-start w-full">
                <p className="text-black text-[20px] font-medium">
                  Name <span className="text-primary">*</span>
                </p>
                <div className="input-field mt-4">
                  <input
                    name="username"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start w-full">
                <p className="text-black text-[20px] font-medium">
                  Email <span className="text-primary">*</span>
                </p>
                <div className="input-field mt-4">
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between space-x-0 space-y-10 md:space-y-0 md:space-x-10 md:mt-20 mt-10">
              <div className="flex flex-col items-start w-full">
                <p className="text-black text-[20px] font-medium">
                  Skype / Phone
                </p>
                <div className="input-field mt-4">
                  <input
                    name="number"
                    type="text"
                    placeholder="Enter your skype or phone number"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start w-full">
                <p className="text-black text-[20px] font-medium">
                  Company Name
                </p>
                <div className="input-field mt-4">
                  <input
                    name="company"
                    type="text"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start w-full mt-20">
              <p className="text-black text-[20px] font-medium">
                Tell us about the project{" "}
                <span className="text-primary">*</span>
              </p>
              <div className="textarea-field mt-8">
                <textarea
                  name="project_details"
                  className="textarea-input"
                  rows={7}
                  placeholder="Project purpose, target audience, competitors, inspiration, etc"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between w-full mt-10 md:mt-0">
              <div className="flex flex-col">
                <div className="mt-3 md:mt-20">
                  <label className="checkbox-label">
                    <div className="flex items-center">
                      <input type="checkbox" className="checkbox-input" />
                    </div>
                    <span className="checkbox-text">
                      I consent to processing of my personal data and{" "}
                      <span className="text-primary underline">
                        Priacy Policy
                      </span>
                      .
                    </span>
                  </label>
                </div>

                <div className="mt-3 md:mt-4">
                  <label className="checkbox-label">
                    <div className="flex items-center">
                      <input type="checkbox" className="checkbox-input" />
                    </div>
                    <span className="checkbox-text">
                      I accept the{" "}
                      <span className="text-primary underline">
                        Terms and Conditions
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <Button className="mt-20 md:mt-0">Submit</Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactForm;
