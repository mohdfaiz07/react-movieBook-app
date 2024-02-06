import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <>
      <div className={style.progressbar}>
        <span className={style.loading}></span>
        <div className={style.load}>LOADING...</div>
      </div>
    </>
  );
};

export default Loading;
