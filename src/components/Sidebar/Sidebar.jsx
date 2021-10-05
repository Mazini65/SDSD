import React from "react";
import Users from "./Users/Users";
import s from './Sidebar.module.css';
const Sidebar = () => {
  return (
    <nav className={s.sidebar}>
      <Users />
    </nav>
  );
};
export default Sidebar;
