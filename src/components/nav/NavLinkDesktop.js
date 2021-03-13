import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import PropTypes from "prop-types";

const NavLinkDesktop = (props) => (
  <AnchorLink
    to={`/#${props.linkContent.slug}`}
    className="font-medium text-primaryColor-default hover:text-pseudoWhite-hover"
  >
    {props.linkContent.label}
  </AnchorLink>
)

NavLinkDesktop.propTypes = {
  linkContent: PropTypes.shape({
    slug: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};

export default NavLinkDesktop;
