import React from "react";
import ContantInfo from "./ContantInfo/ContantInfo";
import s from "./Contant.module.css";
import MyPosts from "./My posts/MyPosts";

const Contant = (props) => {
  return (
    <div>
      <div>
        <ContantInfo />
      </div>
      <div>
        <MyPosts posts={props.posts} addPost={props.addPost} />
      </div>
    </div>
  );
};
export default Contant;
