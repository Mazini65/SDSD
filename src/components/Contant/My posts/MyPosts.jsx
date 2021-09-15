import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
        <Post message="Hello,Chief!" />
      </div>
    </div>
  );
};
export default MyPosts;
