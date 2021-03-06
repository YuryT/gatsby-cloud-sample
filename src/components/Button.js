import React from "react";

const Button = (props) => {
  return (<a href={props.url}
             className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pseudoWhite-default hover:text-pseudoWhite-hover bg-primaryColor-default hover:bg-primaryColor-hover md:py-4 md:text-lg md:px-10">
      {props.label}
    </a>
  );
};

export default Button;
