import React, { useState } from "react";
import { questionData } from "./Data.jsx";
import { FiPlus } from "react-icons/fi";
const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);

  };
  return (
    <div className="w-full bg-black flex justify-center py-4 sm:py-10">
      <div className="  flex  flex-col w-[90%] justify-center  relative   ">
        <h1 className="subheading text-white font-semibold   w-fit px-2 md:px-28  py-4  ">
          Frequently Asked Questions
        </h1>
        <div className="flex items-center justify-center  gap-y-1.5 sm:gap-y-2 w-[80%] self-center flex-col lg:gap-x-4 flex-wrap ">
          {questionData.map((item, index) => (
            <div key={index} className="text-white w-full text-[16px] sm:text-[24px]">
              <button
                onClick={() => toggle(index)}
                className="w-full bg-white/20  py-4  sm:py-6 px-4 flex justify-between items-center"
              >
                <h3>{item.question}</h3>
                <FiPlus id={`plus-${index}`} className={`ml-2 ${activeIndex === index ? 'rotate-45' : ''} duration-100 ease-linear `} />
              </button>
             {
                activeIndex === index && (
                     <div
                id={`answer-${index}`}
                className={`w-full bg-white/20 py-8 mt-0.5 sm:mt-1 px-4 flex justify-between items-center`}
              >
                {item.answer}
              </div>
                )
             }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
