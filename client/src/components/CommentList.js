import React from "react";

import "../css/CommentList.css";

const CommentList = ({ comments, removeComment }) => {
  return (
    <div className="comment-list-wrapper">
      {comments.map((comment) => (
        <div className="comment-list-text">
          <i class="fas fa-times" onClick={() => removeComment(comment.id)}></i>
          {comment.text}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
