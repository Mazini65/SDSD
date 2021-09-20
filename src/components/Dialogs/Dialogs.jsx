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
  let dialogsData = [
    { id: 1, name: "Max" },
    { id: 2, name: "John" },
    { id: 3, name: "Mary" },
    { id: 4, name: "Sara" },
  ];
  let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Nice to meet you))" },
    { id: 4, message: "Great!!" },
  ];
  return (
    <div className={s.dialogs}>
      <div>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  );
};
export default Dialogs;
