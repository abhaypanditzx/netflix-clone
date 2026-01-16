import React, { useEffect, useState } from "react";
import { HiChevronDown, HiChevronRight, HiChevronUp } from "react-icons/hi2";

const Auth = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [getHelpContent, setGetHelpContent] = useState(false);
  console.log(inputFocus);
  return (
    <div className="h-screen bg-linear-to-t flex justify-center items-start   from-black to-red-900/50 w-full">
      <div className="container w-[20em] md:w-[30em] relative top-[20%]">
        <div className="text">
          <h2 className="text-[32px] md:text-3xl pb-4 pr-2 text-white font-bold">
            Enter your info to sign in
          </h2>
          <h4 className="text-white/80 font-medium pb-6 text-md md:text-lg">
            Or get started with a new account.
          </h4>
        </div>
        <div className="input-button flex flex-col gap-y-4 ">
          <div className=" h-[4em] w-full border  relative border-white/20 rounded-md">
            <label
              className={`absolute left-3 text-white/80 transition-all duration-300 pointer-events-none
              ${
                inputFocus
                  ? "top-1 text-sm"
                  : "top-1/2 -translate-y-1/2 text-base"
              }
            `}
            >
              Email or mobile number
            </label>

            <input
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              type="text"
              className="h-full w-full"
            />
          </div>
          <button
            className="text-lg md:text-xl h-fit py-2 w-full  text-white rounded-md  font-semibold relative bg-red-600"
            onClick={() => console.log(inputFocus)}
          >
            Continue
          </button>
        </div>
        {/* get help  */}
        <div>
          <button
            onClick={() => setGetHelpContent(!getHelpContent)}
            className="text-white flex   h-10 items-center  gap-2 "
          >
            {" "}
            Get help{" "}
            {getHelpContent === true ? (
              <HiChevronUp className="mt-1" />
            ) : (
              <HiChevronDown className="mt-1" />
            )}
          </button>
          {/* content to hide and display */}
          {getHelpContent && (
            <div className={`${getHelpContent} `}>
              <button className="text-white block underline">
                Forgot email or mobile number?
              </button>
              <button className="text-white block underline">
                Learn more about sign-in
              </button>
            </div>
          )}
          <p className="text-white/40 text-sm py-5">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-base text-white">Learn more</span></p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
