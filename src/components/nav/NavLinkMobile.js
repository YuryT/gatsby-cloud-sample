import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import PropTypes from "prop-types";

const NavLinkMobile = (props) => (
  <AnchorLink
    to={`/#${props.linkContent.slug}`}
    className="block px-3 py-2 rounded-md text-base font-medium  font-medium text-primaryColor-default hover:text-pseudoWhite-hover"
    role="menuitem"
  >
    {props.linkContent.label}
  </AnchorLink>
);

NavLinkMobile.propTypes = {
  linkContent: PropTypes.shape({
    slug: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};

export default NavLinkMobile;
