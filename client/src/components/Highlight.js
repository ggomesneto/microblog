import React from "react";
import Divisor from "./Divisor";

import "../css/Highlight.css";

const Highlight = () => {
  return (
    <div className="highlight-wrapper">
      <div className="highlight-img">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
        <Divisor color={"#3182ce"} bottom={"0px"} />
      </div>

      <div className="highlight-title"></div>
      <div className="highligth-desc">
        <ul className="highlight-desc-ul">
          <div className="highlight-desc-title">Capabilities:</div>
          <li className="highlight-desc-li">Create / Edit / Remove Posts</li>
          <li className="highlight-desc-li">Add / Edit / Remove Comments</li>
          <li className="highlight-desc-li">Upvote / Downvote</li>
        </ul>
      </div>
    </div>
  );
};

export default Highlight;
