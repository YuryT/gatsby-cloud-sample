import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Button = (props) => {
  return (<AnchorLink to={props.url}
             className=" w-full flex items-center justify-center px-8 py-3
             border border-transparent text-base font-medium rounded-md
             md:py-4 md:text-lg md:px-10 mt-3 sm:mt-0 sm:ml-3 md:max-w-xs
             text-pseudoWhite-default hover:text-pseudoWhite-hover
             bg-primaryColor-default hover:bg-primaryColor-hover
             ">
      {props.label}
    </AnchorLink>
  );
};

export default Button;
