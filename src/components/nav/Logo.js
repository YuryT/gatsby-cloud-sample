import React from "react";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Logo = ({logo}) => (
  <AnchorLink to="/">
    <span className="sr-only">Workflow</span>
    {/*<img
      className="h-8 w-auto sm:h-10"
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    />*/}
    <Img
      fixed={logo.fixed}
      //className="h-8 w-auto sm:h-10"
      className="h-8 w-8 sm:w-10 sm:h-10"
       imgStyle={{ position: "relative", borderRadius: "50%" }}
    />
  </AnchorLink>
);

export default Logo;
