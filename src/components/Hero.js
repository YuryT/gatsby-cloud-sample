import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "./Button";



const Hero = ({ props }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative md:h-screen z-10 pb-8 bg-backgroundColor sm:pb-16 md:pb-20 lg:max-w-lg xl:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <VerticalLine />
          <MainText {...props} />
        </div>
      </div>
      <RightImage {...props} />
    </div>
  );
};

const VerticalLine = () => (
  <svg
    className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-backgroundColor transform translate-x-1/2"
    fill="currentColor" viewBox="0 0 100 100"
    preserveAspectRatio="none" aria-hidden="true">
    <polygon points="50,0 100,0 50,100 0,100"/>
  </svg>
);
const MainText = (props) => (
  <main className="mx-auto h-full items-center max-w-7xl md:flex px-4 p-5 sm:pt-36">
    <div className="sm:text-center lg:text-left">
      <h2 className="text-4xl tracking-tight font-extrabold text-primaryColor-default sm:text-5xl md:text-6xl">
        <span className="block xl:inline">{props.header}</span>
      </h2>
      <h3 className="tracking-tight text-3xl sm:text-4xl md:text-5xl ">
        <span
        className="block text-primaryColor-default xl:inline"
        >
          {props.subHeader}
        </span>
      </h3>
      <div
        className="mt-3 text-base text-pseudoWhite-hover sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
      >
        <div dangerouslySetInnerHTML={{__html: props.description.childMarkdownRemark.html}} />
      </div>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-between">
        {props.buttonsData.edges.map((btnData, i)=>(
          <Button
            url={btnData.node.url}
            key={i}
            label={btnData.node.label}
          />
        ))}
      </div>
    </div>
  </main>
);

const RightImage = (props) => (
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 xl:w-1/2">
    <GatsbyImage
      image={props.image.gatsbyImageData}
      alt="hero-image"
      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
    />
  </div>
);


export default Hero;
