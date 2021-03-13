import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";


const HeroText = (props) => (
  <main
    className="mx-auto h-full items-center max-w-7xl md:flex px-4 p-5 sm:pt-36">
    <div className="sm:text-center lg:text-left">
      <h2
        className="text-4xl tracking-tight font-extrabold
        text-primaryColor-default sm:text-5xl md:text-6xl"
      >
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
        className="mt-3 text-base text-pseudoWhite-hover sm:mt-5 sm:text-lg
        sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
      >
        <div
          dangerouslySetInnerHTML={
            {__html: props.description.childMarkdownRemark.html}
          }
        />
      </div>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-between">
        {props.buttonsData.edges.map((btnData, i) => (
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

HeroText.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  description: PropTypes.object.isRequired,
  buttonsData: PropTypes.object.isRequired,
};

HeroText.defaultProps = {
  subHeader: '',
};

export default HeroText;
