import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.logo}>
      <div>
        {props.src}
        {props.message}
        {props.text}
        {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
