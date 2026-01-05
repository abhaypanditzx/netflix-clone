import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Trending from "./components/Trending";
import ReasonsToJoin from "./components/ReasonsToJoin";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import { GoChevronRight } from "react-icons/go";
const Home = () => {
  return (
    <div className=" w-full bg-black">
      {/* hero section */}
      <HeroSection />
      {/* trending section */}
      <Trending />
      {/* more reaons to join section  */}
      <ReasonsToJoin />
      {/* frequently asked questions  */}
      <FrequentlyAskedQuestions />
      
    </div>
  );
};

export default Home;
