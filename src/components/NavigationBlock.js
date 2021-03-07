import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import Diagonal from "./Diagonal";

const NavigationBlock = (props) => {
  let imageBlockWidth = "lg:w-52/100 xl:w-48/100 2xl:w-1/2";
  let textBlockModifier = "px-20 lg:w-1/2 xl:w-52/100";
  if (props.even) {
    imageBlockWidth = "lg:w-60/100 xl:w-60/100 2xl:w-55/100";
    textBlockModifier = "pl-10 sm:pl-28 lg:w-42/100 xl:w-42/100  2xl:w-45/100";
  }
  return (
    <div className=" border-primaryColor-default">
      <div className={`lg:flex ${props.even? 'lg:flex-row-reverse': ''}`}>
        <div className={`my-10 ${textBlockModifier}`}>
          <h2
            id={props.slug}
            className="text-center mb-5 text-3xl sm:text-4xl text-primaryColor-default">
            {props.header}
          </h2>
          <div dangerouslySetInnerHTML={{__html: props.content.childMarkdownRemark.html}} />
        </div>
        <div className={`relative ${imageBlockWidth}`}>
          <GatsbyImage
            image={props.image.gatsbyImageData}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          />
          <Diagonal leftToRight={props.even} />
        </div>
      </div>
    </div>
  );
};

export default NavigationBlock;
