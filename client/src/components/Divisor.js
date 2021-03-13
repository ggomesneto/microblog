import React from "react";

import "../css/Divisor.css";

const Divisor = ({ color, bottom }) => {
  return (
    <div className="divisor" style={{ transform: "translateZ(0px)", bottom }}>
      <svg
        className="svg-polygon"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          style={{ fill: color }}
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  );
};

export default Divisor;
