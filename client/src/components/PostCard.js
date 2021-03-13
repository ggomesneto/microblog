import React from "react";

import { useDispatch } from "react-redux";
import { sendVoteToAPI } from "../actions/posts";

import "../css/PostCard.css";

import { Link } from "react-router-dom";

const PostCard = ({ data }) => {
  const dispatch = useDispatch();
  const { description, title, votes, id } = data;

  function vote(direction) {
    dispatch(sendVoteToAPI(id, direction));
  }

  return (
    <li className="postcard-wrapper">
      <Link className="postcard-link" exact to={`/${id}`}>
        <div className="postcard-title">{title}</div>
      </Link>
      <div className="postcard-description">{description}</div>
      <div className="postcard-votes">
        <i className="fas fa-thumbs-up" onClick={() => vote("up")}></i>
        {votes}
        <i className="fas fa-thumbs-down" onClick={() => vote("down")}></i>
      </div>
    </li>
  );
};

export default PostCard;
