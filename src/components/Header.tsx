import React from "react";
import reactLogo from "../assets/react.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>Header</div>
      <div>Name</div>
    </div>
  );
}
