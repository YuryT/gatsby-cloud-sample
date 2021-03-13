import React from "react";



//TODO Diagonal can be used here
const VerticalLine = () => (
  <svg
    className="hidden lg:block absolute right-0 inset-y-0 h-full w-48
    text-backgroundColor transform translate-x-1/2"
    fill="currentColor" viewBox="0 0 100 100"
    preserveAspectRatio="none" aria-hidden="true">
    <polygon points="50,0 100,0 50,100 0,100"/>
  </svg>
);


export default VerticalLine;
