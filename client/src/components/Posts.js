import React, { useState, useEffect } from "react";

import Highlight from "./Highlight";
import PostCard from "./PostCard";

import "../css/Posts.css";

import { useSelector, useDispatch } from "react-redux";

import { fetchTitleFromAPI, fetchTitlesFromAPI } from "../actions/titles";

const Posts = () => {
  const titles = useSelector((state) => state.titles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTitle() {
      await dispatch(fetchTitlesFromAPI());
      setIsLoading(false);
    }

    if (isLoading) {
      fetchTitle();
    }
  }, [dispatch, isLoading]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="posts-wrapper">
      <div className="posts-left">
        <Highlight />
      </div>
      <div className="posts-right">
        <ul>
          {titles.map((data) => (
            <PostCard data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
