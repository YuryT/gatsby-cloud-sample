import React from "react";
import PropTypes from "prop-types";

const Diagonal = (props) => {
  let polygon;
  let classModifier;
  if (props.leftToRight) {
    polygon = <polygon points="0,0 50,0 100,100 50,100" />;
    classModifier = "right-0 translate-x-1/2";
  } else {
    polygon = <polygon points="50,0 100,0 50,100 0,100" />;
    classModifier = "-translate-x-1/2";
  }
  return (<svg
      className={`hidden lg:block absolute inset-y-0 h-full w-48 
      text-backgroundColor transform ${classModifier} `}
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {polygon}
    </svg>
  );
};

Diagonal.propTypes = {
  leftToRight: PropTypes.bool,
};

export default Diagonal;
