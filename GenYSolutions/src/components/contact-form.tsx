"use client";

import { useState, useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [userInfo, SetUserInfo] = useState({projectDetails: "", userName: "", userEmail: "", companyName: "", skypeOrPhone: "", privacy: false, terms: false});
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!userInfo.userName.trim()) {
      toast.error("Please enter a username");
    } else if (!userInfo.userEmail.trim()) {
      toast.error("Please enter an email");
    } else if (!userInfo.projectDetails.trim()) {
      toast.error("Please tell us about your project");
    } 
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.userEmail)) {
      toast.error(
        "Please enter a valid email address example example@gmail.com"
      );
    } 
    else if (!(userInfo.privacy)) {
      toast.error(
        "Please consent to Privacy Policy"
      );
    } 
    else if (!(userInfo.terms)) {
      toast.error(
        "Please accept terms and conditions"
      );
    } 
    else {
      toast.loading("Please wait...");
      setSending(true)
      form.current.reset()
      console.log(form.current);
      emailjs.sendForm("service_xekqkl9","template_9poobu3",form.current,"vTNCg0_4K3Gp0v11m")
        .then(() => {
          toast.remove();
          toast.success("success");
          setSending(false)
          SetUserInfo({...userInfo, projectDetails: "", userName: "", userEmail: "", companyName: "", skypeOrPhone: "", privacy: false, terms: false})
        });
    }
  };

  return (
    <div>
      {/* <ToastContainer position="top-center" /> */}
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
                <div className="input-field mt-4">
                  <input
                    name="username"
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={userInfo.userName}
                    onChange={(e) => SetUserInfo({ ...userInfo, userName: e.target.value})}
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
                    required
                    value={userInfo.userEmail}
                    onChange={(e) => SetUserInfo({ ...userInfo, userEmail: e.target.value})}
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
                    value={userInfo.skypeOrPhone}
                    onChange={(e) => SetUserInfo({ ...userInfo, skypeOrPhone: e.target.value})}
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
                    onChange={(e) => SetUserInfo({ ...userInfo, companyName: e.target.value})}
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
              <div className="textarea-field mt-8">
                <textarea
                  name="project_details"
                  className="textarea-input"
                  rows={7}
                  placeholder="Project purpose, target audience, competitors, inspiration, etc"
                  required
                  value={userInfo.projectDetails}
                  onChange={(e) => SetUserInfo({ ...userInfo, projectDetails: e.target.value})}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between w-full mt-10 md:mt-0">
              <div className="flex flex-col">
                <div className="mt-3 md:mt-20">
                  <label className="checkbox-label">
<<<<<<< HEAD
                    <div className="flex items-center">
                      <input type="checkbox" className="checkbox-input" />
=======
                    <div>
                      <input type="checkbox" className="checkbox-input" value={userInfo.privacy} required onChange={e => SetUserInfo({...userInfo, privacy: Boolean(e.target.value)})}/>
>>>>>>> 911aae5f8567a40d41c526aaccfaf6568b7b8e28
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
                    <div className="flex items-center">
                      <input type="checkbox" className="checkbox-input" />
=======
                    <div>
                      <input type="checkbox" className="checkbox-input" value={userInfo.terms} required onChange={e => SetUserInfo({...userInfo, terms: Boolean(e.target.value)})}/>
>>>>>>> 911aae5f8567a40d41c526aaccfaf6568b7b8e28
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
              <Button className="mt-20 md:mt-0" onClick={handleSubmit} disabled={sending}>
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
