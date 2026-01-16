import React from "react";
import  {reasonsToJoinData}  from "./Data.jsx";
const ReasonsToJoin = () => {


  return (
    <div className="w-full bg-black flex justify-center ">
      <div className="  flex  flex-col w-[90%] justify-center  relative   ">
        <h1 className=" subheading text-white font-semibold   w-fit px-2 md:px-28  py-4  ">
          More reasons to join
        </h1>
        <div className="flex items-center justify-center gap-y-4 lg:gap-x-4 flex-wrap ">
            {
                reasonsToJoinData.map((item,index)=>(
                    <div key={index} className=" rounded-xl lg:h-80 w-full h-60 sm:h-50   lg:w-55 text-start gradient-blue-to-purple justify-between   flex  flex-col ">
                   <div className="p-4">
                       <h3 className="text-xl text-white py-2  font-bold">{item.title}</h3>
                      <p className="text-md leading-tight  text-white  ">{item.description}</p>
                   </div>
                   <div className="self-end p-4 ">
                        {item.icon}
                   </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default ReasonsToJoin;
