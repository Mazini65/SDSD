import React from "react";
import ContantInfo from "./ContantInfo/ContantInfo";
import s from "./Contant.module.css";
import MyPosts from "./My posts/MyPosts";

const Contant = (props) => {
  return (
    <div>
      <div>
        <ContantInfo contantInfo={props.contantInfo} />
      </div>
      <div>
        <MyPosts posts={props.posts} />
      </div>
    </div>
  );
};
export default Contant;
