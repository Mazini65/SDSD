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
  return (
    <div className={s.dialogs}>
      <div>
        <DialogItem name="Max" id="1" />
        <DialogItem name="John" id="2" />
        <DialogItem name="Mary" id="3" />
        <DialogItem name="Sara" id="4" />
      </div>
      <div>
        <Message message="Hello" />
        <Message message="How are you?" />
        <Message message="Nice to meet you))" />
        <Message message="Great!!" />
      </div>
    </div>
  );
};
export default Dialogs;
