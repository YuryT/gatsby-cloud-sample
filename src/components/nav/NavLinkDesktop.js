import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavLinkDesktop = (props) => (
  <AnchorLink
    to={`/#${props.linkContent.slug}`}
    className="font-medium text-primaryColor-default hover:text-pseudoWhite-hover"
  >
    {props.linkContent.label}
  </AnchorLink>
)

export default NavLinkDesktop;
