import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { message: "Hello,Chief!", likesCount: 2 },
    { message: "How are you?", likesCount: 4 },
    { message: "WHAT???", likesCount: 3 },
  ];
  let postsElement = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
        <button>Remove</button>
        {postsElement}
      </div>
    </div>
  );
};
export default MyPosts;
