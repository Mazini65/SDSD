import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Comments from "./Comments/Comments";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogName}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <Comments />
    </div>
  );
};
export default Dialogs;
