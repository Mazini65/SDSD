import React from "react";
import ContantInfo from "./ContantInfo/ContantInfo";
import s from "./Contant.module.css";
import MyPosts from "./My posts/MyPosts";

const Contant = () => {
  return (
    <div>
      <div>
        <ContantInfo />
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};
export default Contant;
