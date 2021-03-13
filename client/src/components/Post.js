import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import "../css/Post.css";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import PostForm from "./PostForm";

import {
  getPostFromAPI,
  sendCommentToAPI,
  removeCommentFromAPI,
  sendVoteToAPI,
  removePostFromAPI,
  updatePostInAPI,
} from "../actions/posts";
import { useSelector, useDispatch } from "react-redux";

const Post = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const postId = Number(params.postId);
  const post = useSelector((state) => state.posts[postId]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function getIfNotInState(id) {
      dispatch(getPostFromAPI(id));
    }
    if (!post) {
      getIfNotInState(postId);
    }
  }, [dispatch, postId, post]);

  function addComment(text) {
    dispatch(sendCommentToAPI(postId, text));
  }

  function removeComment(commentId) {
    dispatch(removeCommentFromAPI(postId, commentId));
  }

  function vote(direction) {
    dispatch(sendVoteToAPI(postId, direction));
  }

  function deletePost() {
    dispatch(removePostFromAPI(postId));
    history.push("/");
  }

  function toggleEdit() {
    console.log("teste");
    setIsEditing(!isEditing);
  }

  const cancelPost = () => {
    history.push("/");
  };

  function patchPost({ title, description, body }) {
    dispatch(updatePostInAPI(postId, title, description, body));
    toggleEdit();
  }

  if (!post) return <div>Loading</div>;

  const { title, description, body, votes, comments } = post;
  console.log(isEditing);
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
      {isEditing ? (
        <PostForm
          data={post}
          submit={patchPost}
          cancel={cancelPost}
          isEditing={true}
        />
      ) : (
        <div className="post-detail">
          <div className="post-title">
            {title} <i class="fas fa-edit" onClick={toggleEdit}></i>
            <i class="fas fa-times" onClick={deletePost}></i>
          </div>
          <div className="post-description">
            <i>{description} </i>
          </div>
          <div className="post-body">{body}</div>
          <div className="post-votes">
            <i className="fas fa-thumbs-up" onClick={() => vote("up")}></i>
            {votes}
            <i className="fas fa-thumbs-down" onClick={() => vote("down")}></i>
          </div>
          <CommentForm addComment={addComment} />
          <CommentList removeComment={removeComment} comments={comments} />
        </div>
      )}
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

export default Post;
