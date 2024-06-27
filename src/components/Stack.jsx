import "../styles/Stack.css";
// import git from "../assets/git.png";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import js from "../assets/js.png";
// import react from "../assets/react.svg";
// import node from "../assets/node.png";
// import mongo from "../assets/mongo.png";
import Title from "./Title";

import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

export default function Stack() {
  // const tools = [git, js, react, node, html, css, mongo];
  return (
    <section className="tools">
      <Title title={"Stack"} />
      <div className="toolsContainer">
        {/* {tools.map((tool, index) => (
          <img src={tool} className="toolImg" key={index} />
        ))} */}
        <FaGitAlt size={60} color="orangered" className="stackIcon" />
        <IoLogoJavascript size={60} className="stackIcon" />
        <FaPython size={60} className="stackIcon" />
        <FaReact size={60} className="stackIcon" />
        <FaNodeJs size={60} className="stackIcon" />
        <SiExpress size={60} className="stackIcon" />
        <SiMongodb size={60} className="stackIcon" />
        <FaCss3Alt size={60} className="stackIcon" />
        <FaHtml5 size={60} className="stackIcon" />
        <IoLogoFirebase size={60} className="stackIcon" />
      </div>
    </section>
  );
}
