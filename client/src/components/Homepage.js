import React from "react";

import Land from "./Land";
import Posts from "./Posts";
import Divisor from "./Divisor";

import "../css/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <Land />
      <Divisor color="#e2e8f0" bottom="49%" />
      <Posts />
    </div>
  );
};

export default Homepage;
