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
  let newPostElement = React.createRef();
  let addPost = () => {
    let postElement = newPostElement.current.value;
    props.addPost(postElement);
    newPostElement.current.value = "";
  };
  return (
    <div>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
        {postsElement}
      </div>
    </div>
  );
};
console.log(MyPosts);
export default MyPosts;
