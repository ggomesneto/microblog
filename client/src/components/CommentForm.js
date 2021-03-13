import React, { useState } from "react";

import "../css/CommentForm.css";

const CommentForm = ({ addComment }) => {
  const [formData, setFormData] = useState({ text: "" });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = () => {
    addComment(formData.text);
    setFormData({ text: "" });
  };

  console.log(formData);

  return (
    <div className="comment-form-wrapper">
      <form>
        <label className="comment-form-label" htmlFor="comment">
          ADD A COMMENT:
        </label>
        <p />
        <textarea
          cols="40"
          rows="4"
          style={{ resize: "none" }}
          type="text"
          name="text"
          onChange={handleChange}
          value={formData.text}
          maxLength="50"
        />
        <p />
        <div className="comment-form-btn" onClick={handleSubmit}>
          <i class="far fa-comment"></i>ADD
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
