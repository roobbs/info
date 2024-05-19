import React from "react";
import reactLogo from "../assets/react.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerName">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <div className="myName">roobbs</div>
      </div>
      <ul className="headerItems">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
