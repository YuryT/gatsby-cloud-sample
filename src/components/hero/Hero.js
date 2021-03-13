import React from "react";
import VerticalLine from "./VerticalLine";
import HeroText from "./HeroText";
import RightImage from "./RightImage";


const Hero = ({props}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative md:h-screen z-10 pb-8 bg-backgroundColor sm:pb-16
           md:pb-20 lg:max-w-lg xl:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <VerticalLine/>
          <HeroText {...props} />
        </div>
      </div>
      <RightImage {...props} />
    </div>
  );
};


export default Hero;
