import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.logo}>
      <div>
        <img src="https://gtavrl.ru/public/poscreenra.jpg" />
        {props.message}
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
