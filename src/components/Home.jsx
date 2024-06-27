import React from "react";
import "../styles/Home.css";
import Stack from "./Stack";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

export default function Home() {
  return (
    <section className="homeSection" id="home">
      <div className="homeName">
        <div>
          <div className="text">Hi, I'm Carlos Salmerón</div>
          <div className="boldText">Full Stack Developer</div>
          <div className="text">Seeking to be the problem solver you need</div>
        </div>
        <div className="picture"></div>
      </div>
      <div className="homeButtons">
        <a
          className="homeBtn"
          href="https://github.com/roobbs"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="icon" />
          <div>Github</div>
        </a>
        <a
          className="homeBtn"
          href="https://linkedin.com/in/carlos-salmeron/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="icon" />
          <div>Linkedin</div>
        </a>
        <a
          className="homeBtn"
          href="https://www.codewars.com/users/roobbs"
          target="_blank"
          rel="noreferrer"
        >
          <SiCodewars className="icon" />
          <div>Codewars</div>
        </a>
      </div>
      <Stack />
    </section>
  );
}
