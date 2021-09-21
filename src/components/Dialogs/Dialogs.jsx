import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
const DialogItem = (props) => {
  return (
    <div className={s.dialogName}>
      <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Max" },
    { id: 2, name: "John" },
    { id: 3, name: "Mary" },
    { id: 4, name: "Sara" },
  ];
  let messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Nice to meet you))" },
    { id: 4, message: "Great!!" },
  ];
  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogName}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
