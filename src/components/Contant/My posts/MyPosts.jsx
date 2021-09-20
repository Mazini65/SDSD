import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [{ message: "Hello,Chief!", likesCount: 2 }];

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
        <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
      </div>
    </div>
  );
};
export default MyPosts;
