import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendPostToAPI } from "../actions/posts";

import PostForm from "./PostForm";

const New = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addPost = ({ body, description, title }) => {
    dispatch(sendPostToAPI(title, description, body));
    history.push("/");
  };

  const cancelPost = () => {
    history.push("/");
  };

  return (
    <div className="post-wrapper">
      <div className="post-imgs">
        <div className="post-imgs-left">
          <img
            className="post-img-big"
            src="https://images.unsplash.com/photo-1543769657-fcf1236421bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
          />
          <img
            className="post-img-small"
            src="https://images.unsplash.com/photo-1564140800994-913d848fdc8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80"
          />
        </div>
        <div className="post-imgs-right">
          <img
            src="https://images.unsplash.com/photo-1610405205717-dfeb58d1b77c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            className="post-img-big"
          />
        </div>
      </div>
      <PostForm submit={addPost} cancel={cancelPost} />
      <div className="bottom-curve">
        <svg
          viewBox="0 0 500 350"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C117.66,145.55 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{
              stroke: "none",
              fill: "#08f",
              zIndex: "-10",
              position: "relative",
            }}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default New;
