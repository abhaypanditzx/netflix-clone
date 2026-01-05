import React from "react";
import { HiLanguage } from "react-icons/hi2";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import logo from "../assets/navbar/logo.png";
const NavBar = () => {
  return (
    <nav className="bg-transparent w-full  absolute z-10 ">
      <div className="flex    gap-10 flex-row items-center  justify-around">
        <img className="h-20 " src={logo} alt="logo" />

        <div className="flex gap-2">
       <div className="flex flex-row items-center justify-between w-20 relative sm:w-32 bg-gray-900 p-2  gap-2">
           <HiLanguage  className="text-white text-sm"/>
           {/* mobile device */}
               <select
            name="language"
            className="bg-gray-900 sm:hidden block outline-none   border-none  left-[50%] w-full text-center translate-x-[-50%]  text-white px-1 py-1 absolute"
            id="language"
          >
            <option className="text-gray-900 visible" value="english">EN</option>
            <option className="text-gray-900 visible" value="hindi">HI</option>
          </select>
          <select
            name="language"
            className="bg-gray-900 sm:block hidden outline-none aria-hidden:  border-none pr-5 left-[50%] w-full text-center translate-x-[-50%]  text-white px-3 py-1 absolute"
            id="language"
          >
            <option className="text-gray-900 visible" value="english"> English </option>
            <option className="text-gray-900 visible" value="hindi">Hindi</option>
          </select>
            <TbTriangleInvertedFilled   className="text-white  text-[10px]" />
       </div>
          <button className="bg-red-600 sm:px-3 sm:text-md text-xs  text-white px-1 rounded-md sm:py-1 py-0.5 font-bold ">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
