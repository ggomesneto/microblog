import React from "react";
import Divisor from "./Divisor";
import Posts from "./Posts";

import "../css/Land.css";

const Land = () => {
  return (
    <div className="land-wrapper">
      <div className="land-text">
        <div className="land-text-title">
          <i>GET IN THE RHYTHM OF BLOGGING</i>
        </div>
        <div className="land-text-desc">
          React App with Redux and NodeJS/Express Backend
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1605106702842-01a887a31122?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
    </div>
  );
};

export default Land;
