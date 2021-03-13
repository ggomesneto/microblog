import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import "../css/Menu.css";

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        <NavLink exact to="/">
          <div className="menu-title">MICROBLOG</div>
        </NavLink>
        <ul className="menu-left">
          <li className="menu-docs">
            <div className="menu-docs-link">
              <i className="far fa-file-alt icon " />
              DOCS
            </div>
          </li>
        </ul>
        <ul className="menu-right">
          <NavLink exact to="/">
            <li className="menu-link">BLOG</li>
          </NavLink>
          <NavLink exact to="/new">
            <li className="menu-link">ADD A POST</li>
          </NavLink>
        </ul>

        <div className="menu-icons">
          <a href="htps://github.com/ggomesneto">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
