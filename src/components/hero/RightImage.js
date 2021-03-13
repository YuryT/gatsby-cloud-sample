import React from "react";
import {GatsbyImage} from "gatsby-plugin-image"
import PropTypes from "prop-types";


const RightImage = (props) => (
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 xl:w-1/2">
    <GatsbyImage
      image={props.image.gatsbyImageData}
      alt="hero-image"
      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
    />
  </div>
);

RightImage.propTypes = {
  image: PropTypes.object.isRequired,
};


export default RightImage;
