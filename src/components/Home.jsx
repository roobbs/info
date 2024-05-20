import React from "react";
import "../styles/Home.css";
import Stack from "./Stack";

export default function Home() {
  return (
    <div className="home">
      <div className="homeName">
        <div>
          <div className="text">Hi, I'm Carlos Salmerón</div>
          <div className="boldText">Full Stack Developer</div>
          <div className="text">Another text</div>
        </div>
        <div className="picture">FOTO</div>
      </div>
      <div className="homeButtons">
        <a
          className="homeBtn"
          href="https://github.com/roobbs"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="homeBtn"
          href="https://github.com/roobbs"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
      <Stack />
    </div>
  );
}
