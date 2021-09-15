import React from "react";
import s from "./Like.module.css";
const Like = (props) => {
  return (
    <div className={s.like}>
      <input type="button" value="Like" />
      {props.text}
    </div>
  );
};
export default Like;
