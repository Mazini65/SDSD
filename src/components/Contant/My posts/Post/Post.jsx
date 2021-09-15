import React from "react";
import Like from "./Like/Like";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.logo}>
      <div>
        <img src="https://gtavrl.ru/public/poscreenra.jpg" />
        {props.message}
        <Like text="55" />
      </div>
    </div>
  );
};
export default Post;
