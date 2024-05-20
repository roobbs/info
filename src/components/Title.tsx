import React from "react";
import "../styles/Title.css";

export default function Title({ title }) {
  return (
    <>
      <div className="titleContainer">
        <div>{title}</div>
        <div className="point">.</div>
      </div>
    </>
  );
}
