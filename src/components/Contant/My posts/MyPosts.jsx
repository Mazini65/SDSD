import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post
      src={p.src}
      message={p.message}
      text={p.text}
      likesCount={p.likesCount}
    />
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
console.log(MyPosts);
export default MyPosts;
