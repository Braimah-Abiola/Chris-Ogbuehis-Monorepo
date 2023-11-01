"use client";

import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/button";

import MaxWidthWrapper from "./MaxWidthWrapper";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
<<<<<<< HEAD
import { BiErrorCircle } from "react-icons/bi";
const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [userInfo, SetUserInfo] = useState({
=======

interface UserInfo {
  projectDetails: string;
  userName: string;
  userEmail: string;
  companyName: string;
  skypeOrPhone: string;
  privacy: boolean;
  terms: boolean;
}

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [userInfo, setUserInfo] = useState({
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
    projectDetails: "",
    userName: "",
    userEmail: "",
    companyName: "",
    skypeOrPhone: "",
    privacy: false,
    terms: false,
  });
<<<<<<< HEAD
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!userInfo.userName.trim()) {
      setError(true);
      toast.error("Please enter a username");
=======

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInfo.userName.trim()) {
      toast.error("Please enter your name");
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
    } else if (!userInfo.userEmail.trim()) {
      setError(true);
      toast.error("Please enter an email");
<<<<<<< HEAD
=======
    } else if (!userInfo.projectDetails.trim()) {
      toast.error("Please tell us about your project");
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.userEmail)) {
      toast.error(
        "Please enter a valid email address example example@gmail.com"
      );
<<<<<<< HEAD
    } else if (!userInfo.projectDetails.trim()) {
      setError(true);
      toast.error("Please tell us about your project");
=======
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
    } else if (!userInfo.privacy) {
      toast.error("Please consent to Privacy Policy");
    } else if (!userInfo.terms) {
      toast.error("Please accept terms and conditions");
    } else {
      toast.loading("Please wait...");
      setSending(true);
<<<<<<< HEAD
      setError(false)
      emailjs
        .sendForm(
          "service_xekqkl9",
          "template_9poobu3",
          form.current,
          "vTNCg0_4K3Gp0v11m"
        )
        .then(() => {
          toast.remove();
          toast.success("success");
          setSending(false);
          SetUserInfo({
            ...userInfo,
            projectDetails: "",
            userName: "",
            userEmail: "",
            companyName: "",
            skypeOrPhone: "",
            privacy: false,
            terms: false,
          });
        });
=======
      if (form.current) {
        emailjs
          .sendForm(
            "service_xekqkl9",
            "template_9poobu3",
            form.current,
            "vTNCg0_4K3Gp0v11m"
          )
          .then(() => {
            toast.remove();
            toast.success("success");
            setSending(false);
            setUserInfo({
              projectDetails: "",
              userName: "",
              userEmail: "",
              companyName: "",
              skypeOrPhone: "",
              privacy: false,
              terms: false,
            });
          });
      }
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: checked }));
  };

  return (
    <div>
      <Toaster />
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

          <form
            ref={form}
            className="flex flex-col w-full mt-10 md:mt-0"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col md:flex-row justify-between space-x-0 space-y-10 md:space-y-0 md:space-x-10">
              <div className="flex flex-col items-start w-full">
                <p className="text-black text-[20px] font-medium">
                  Name <span className="text-primary">*</span>
                </p>
                <div
                  className={`input-field mt-4 ${
                    error && !userInfo.userName.trim() && ""
                  }`}
                >
                  <input
                    name="username"
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={userInfo.userName}
                    onChange={(e) =>
<<<<<<< HEAD
                      SetUserInfo({ ...userInfo, userName: e.target.value })
=======
                      setUserInfo({ ...userInfo, userName: e.target.value })
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
                    }
                  />
                </div>
                {error && !userInfo.userName.trim() && (
                  <span className="text-red-700 text-[12px] flex gap-1 mt-2 items-center">
                    <BiErrorCircle size={16} />
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex flex-col items-start w-full">
                <p className="text-black text-[20px] font-medium">
                  Email <span className="text-primary">*</span>
                </p>
                <div
                  className={`input-field mt-4 ${
                    error && !userInfo.userEmail.trim() && ""
                  }`}
                >
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    required
                    value={userInfo.userEmail}
                    onChange={(e) =>
<<<<<<< HEAD
                      SetUserInfo({ ...userInfo, userEmail: e.target.value })
=======
                      setUserInfo({ ...userInfo, userEmail: e.target.value })
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
                    }
                  />
                </div>
                {error && !userInfo.userEmail.trim() && (
                 <span className="text-red-700 text-[12px] flex gap-1 mt-2 items-center">
                 <BiErrorCircle size={16} />
                 This field is required
               </span>
                )}
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
                    value={userInfo.skypeOrPhone}
                    onChange={(e) =>
<<<<<<< HEAD
                      SetUserInfo({ ...userInfo, skypeOrPhone: e.target.value })
=======
                      setUserInfo({ ...userInfo, skypeOrPhone: e.target.value })
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
                    }
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
                    onChange={(e) =>
<<<<<<< HEAD
                      SetUserInfo({ ...userInfo, companyName: e.target.value })
=======
                      setUserInfo({ ...userInfo, companyName: e.target.value })
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
                    }
                    value={userInfo.companyName}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start w-full mt-20">
              <p className="text-black text-[20px] font-medium">
                Tell us about the project{" "}
                <span className="text-primary">*</span>
              </p>
              <div
                className={`textarea-field mt-8`}
              >
                <textarea
                  name="project_details"
                  className="textarea-input"
                  rows={7}
                  placeholder="Project purpose, target audience, competitors, inspiration, etc"
                  required
                  value={userInfo.projectDetails}
                  onChange={(e) =>
<<<<<<< HEAD
                    SetUserInfo({ ...userInfo, projectDetails: e.target.value })
=======
                    setUserInfo({ ...userInfo, projectDetails: e.target.value })
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
                  }
                />
              </div>
              {error && !userInfo.projectDetails.trim() && (
                <span className="text-red-700 text-[12px] flex gap-1 mt-2 items-center">
                <BiErrorCircle size={16} />
                This field is required
              </span>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between w-full mt-10 md:mt-0">
              <div className="flex flex-col">
                <div className="mt-3 md:mt-20">
                  <label className="checkbox-label">
<<<<<<< HEAD
                    <div>
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        required
                        onChange={(e) =>
                          SetUserInfo({
=======
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={userInfo.privacy}
                        required
                        onChange={(e) =>
                          setUserInfo({
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
                            ...userInfo,
                            privacy: Boolean(e.target.value),
                          })
                        }
                      />
                    </div>
                    <span className="checkbox-text">
                      I consent to processing of my personal data and{" "}
                      <span className="text-primary underline">
                        Privacy Policy
                      </span>
                      .
                    </span>
                  </label>
                </div>

                <div className="mt-3 md:mt-4">
                  <label className="checkbox-label">
<<<<<<< HEAD
                    <div>
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        required
                        onChange={(e) =>
                          SetUserInfo({
=======
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={userInfo.terms}
                        required
                        onChange={(e) =>
                          setUserInfo({
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
                            ...userInfo,
                            terms: Boolean(e.target.value),
                          })
                        }
                      />
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
              <Button
                className="mt-20 md:mt-0"
<<<<<<< HEAD
                onClick={handleSubmit}
=======
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleSubmit(e as unknown as FormEvent<HTMLFormElement>)
                }
>>>>>>> 27b237de6e2da6f19e38c7b43f2ce96b71db894e
                disabled={sending}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactForm;
