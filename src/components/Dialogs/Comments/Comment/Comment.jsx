import React from "react";
const Comment = () => {
  let newCommentElement = React.createRef();
  let addComment = () => {
    let commentElement = newCommentElement.current.value;
    alert(commentElement);
    newCommentElement.current.value = "";
  };
  return (
    <div>
      <textarea ref={newCommentElement}></textarea>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};
export default Comment;
