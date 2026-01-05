import React from 'react'
import background from "../../../assets/bg.jpg";
import { GoChevronRight } from "react-icons/go";
const HeroSection = () => {
  return (
    <div>
        <section className="relative h-screen   ">
        <div className="netflix-bg">
          <div className=" bg-black/70 flex justify-center items-center   h-screen w-full">
            <div className=" w-[90%] sm:w-[55%] justify-center items-center h-full flex text-center flex-col">
              <h1 className="font-bold text-white text-4xl md:text-6xl  text-center ">
                Unlimited movies, shows, and more
              </h1>
              <h3 className="font-semibold text-white text-xl sm:text-2xl pt-2 sm:pt-5 text-center">
                Starts at ₹149. Cancel at any time.
              </h3>
              <h6 className="font-normal text-white text-[16px] sm:text-md  pt-4 sm:pt-7 text-center">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h6>

              <div className="flex flex-col gap-2 pt-4 justify-center items-center sm:flex-row">
                <input
                  type="text"
                  className="outline-white border h-12 sm:h-15  rounded-[5px]  py-0 align-text-bottom px-2 bg-black/20 border-gray-400 placeholder:px-5  w-75 md:w-95 focus-within:outline-red text-gray-100  "
                  placeholder="Email address"
                />
                <button className="text-white bg-red-600  rounded-md px-4 h-12 sm:h-15  flex justify-around items-center text-xl   sm:w-50 w-40 md:text-2xl font-semibold">
                  <span>Get Started </span>
                  <GoChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
