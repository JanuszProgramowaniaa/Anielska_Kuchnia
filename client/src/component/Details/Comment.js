import React from "react";
import CommentStyle from "./Comment.module.css";
export default function Comment() {
  return (
    <div className={CommentStyle.author}>
      <span className={CommentStyle.header}>
        <b>Robert</b> <b className={CommentStyle.date}>20.05.2021</b>
      </span>
      <p>Danie pierwsza klasa dla każdego głodomorka </p>
    </div>
  );
}
