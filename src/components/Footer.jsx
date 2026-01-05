import React from "react";
import { GoChevronRight } from "react-icons/go";
import { HiLanguage } from "react-icons/hi2";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
  
      <div className="flex flex-col justify-center py-4 px-2">
        <p className="text-white  text-center text-base sm:text-xl ">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col items-start gap-2 pt-4 justify-center sm:items-center sm:flex-row">
          <input
            type="text"
            className="outline-white border h-12 sm:h-14  rounded-[5px]  py-0 align-text-bottom px-2 bg-black/20 border-gray-400 placeholder:px-5  w-75 md:w-[35em] focus-within:outline-red text-gray-100  "
            placeholder="Email address"
          />
          <button className="text-white bg-red-600  rounded-md px-4 h-12 sm:h-14  flex justify-around items-center text-xl   sm:w-50 w-40 md:text-2xl font-semibold">
            <span>Get Started </span>
            <GoChevronRight />
          </button>
        </div>
      </div>
      <div className="px-6 bg-black text-[#ffffffb3]  text-sm flex flex-col gap-10  sm:px-10 ">
        <div className="py-2">quesitons? call <span className="underline">000-800-919-1743</span></div>

        <ul className=" capitalize grid grid-cols-1 underline text-sm sm:text-lg  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-x-5 pb-6 ">
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">help center</a>
          </li>
          <li>
            <a href="/">account</a>
          </li>
          <li>
            <a href="/">media centre</a>
          </li>
          <li>
            <a href="/">investor relations</a>
          </li>
          <li>
            <a href="/">jobs</a>
          </li>
          <li>
            <a href="/">ways to watch</a>
          </li>
          <li>
            <a href="/">terms of use</a>
          </li>
          <li>
            <a href="/">privacy</a>
          </li>
          <li>
            <a href="/">cookie preferences</a>
          </li>
          <li>
            <a href="/">corporate information</a>
          </li>
          <li>
            <a href="/">contact us</a>
          </li>
          <li>
            <a href="/">speed test</a>
          </li>
          <li>
            <a href="/">legal notice</a>
          </li>
          <li>
            <a href="/">only on netflix</a>
          </li>
        </ul>
        <div className="gap-y-2 flex flex-col  pb-4">
          <div className="flex flex-row items-center justify-between w-30 relative sm:w-42 bg-gray-900 p-2   gap-2">
            <HiLanguage className="text-white text-sm" />
            {/* mobile device */}
            <select
              name="language"
              className="bg-gray-900 sm:hidden block outline-none   border-none  left-[50%] w-full text-center translate-x-[-50%]  text-white px-1 py-1 absolute"
              id="language"
            >
              <option className="text-gray-900 visible" value="english">
                EN
              </option>
              <option className="text-gray-900 visible" value="hindi">
                HI
              </option>
            </select>
            <select
              name="language"
              className="bg-gray-900 sm:block hidden outline-none aria-hidden:  border-none pr-5 left-[50%] w-full text-center translate-x-[-50%]  text-white px-3 py-1 absolute"
              id="language"
            >
              <option className="text-gray-900 visible" value="english">
                {" "}
                English{" "}
              </option>
              <option className="text-gray-900 visible" value="hindi">
                Hindi
              </option>
            </select>
            <TbTriangleInvertedFilled className="text-white  text-[10px]" />
          </div>

          <p className="py-4 text-sm">Netflix India</p>
          <p className="text-[ffffffb3]">
            this page is protected by google reCAPTCHA to ensure you're not a
            bot. <span className="underline text-blue-500">learn more</span>
          </p>

                                  <button className="text-white bg-red-600 no-underline rounded-md w-[90%]  py-1 flex justify-around items-center text-xl   sm:w-50  md:text-2xl font-semibold">
                                    Get Started 
                                  </button>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
