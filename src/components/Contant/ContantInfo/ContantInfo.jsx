import React from "react";
import s from "./ContantInfo.module.css";

const ContantInfo = () => {
  return (
    <div className={s.contantInfo}>
      <img
        src="https://wallpaperaccess.com/full/51360.jpg"
        className={s.contantPage}
      />
      <img
        src="https://thumbs.dreamstime.com/b/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BC%D0%BE%D0%B4%D0%B0-%D0%B1%D0%BE%D1%81%D1%81-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D1%8B-%D0%BA%D1%80%D0%B5%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D0%B8%D0%B7-168197016.jpg"
        className={s.avatar}
      />
    </div>
  );
};
export default ContantInfo;
