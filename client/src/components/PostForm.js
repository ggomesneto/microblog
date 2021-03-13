import React, { useState } from "react";

import "../css/PostForm.css";

let initial_state = {
  title: "",
  description: "",
  body: "",
};
const PostForm = ({
  isEditing = false,
  submit,
  cancel,
  data = initial_state,
}) => {
  const [formData, setFormData] = useState(data);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = () => {
    submit(formData);
  };
  return (
    <div className="post-form-wrapper">
      <form>
        <label htmlFor="title">Title:</label>
        <p />
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formData.title}
          maxLength="30"
        />
        <p />
        <label htmlFor="description">Description:</label>
        <p />
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
          maxLength="50"
        />
        <p />
        <label htmlFor="body">Body:</label>
        <p />
        <textarea
          cols="40"
          rows="9"
          type="text"
          name="body"
          onChange={handleChange}
          style={{ resize: "none" }}
          value={formData.body}
          maxLength="420"
        />
        <p />
        <div className="post-form-btn" onClick={handleSubmit}>
          {isEditing ? "UPDATE POST" : "ADD POST"}
        </div>{" "}
        <div className="post-form-btn" onClick={cancel}>
          CANCEL
        </div>
      </form>
    </div>
  );
};

export default PostForm;
