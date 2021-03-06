import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavLinkMobile = (props) => (
  <AnchorLink
    to={`/#${props.linkContent.slug}`}
    className="block px-3 py-2 rounded-md text-base font-medium  font-medium text-primaryColor-default hover:text-pseudoWhite-hover"
    role="menuitem"
  >
    {props.linkContent.label}
  </AnchorLink>
)

export default NavLinkMobile;
