import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import PropTypes from "prop-types";

const Logo = ({logo}) => (
  <AnchorLink to="/">
    <span className="sr-only">Workflow</span>
    {/*<img
      className="h-8 w-auto sm:h-10"
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    />*/}
    <GatsbyImage
      image={logo.gatsbyImageData}
      //image size set in request
      className="h-8 w-8 sm:w-10 sm:h-10 rounded-full"

    />
  </AnchorLink>
);

Logo.propTypes = {
  logo: PropTypes.object.isRequired,
};

export default Logo;
