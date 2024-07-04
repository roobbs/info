import "../styles/Stack.css";
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
  return (
    <section className="tools">
      <Title title={"Stack"} />
      <div className="slider">
        <div className="toolsContainer">
          <FaGitAlt color="orangered" className="stackIcon stackIcon1" />
          <IoLogoJavascript className="stackIcon stackIcon2" />
          <FaPython className="stackIcon stackIcon3" />
          <FaReact className="stackIcon stackIcon4" />
          <FaNodeJs className="stackIcon stackIcon5" />
          <SiExpress className="stackIcon stackIcon6" />
          <SiMongodb className="stackIcon stackIcon7" />
          <FaCss3Alt className="stackIcon stackIcon8" />
          <FaHtml5 className="stackIcon stackIcon9" />
          <IoLogoFirebase className="stackIcon stackIcon10" />
        </div>
      </div>
      <div className="slider">
        <div className="toolsContainer" data-reverse="true">
          <FaGitAlt color="orangered" className="stackIcon stackIcon1" />
          <IoLogoJavascript className="stackIcon stackIcon2" />
          <FaPython className="stackIcon stackIcon3" />
          <FaReact className="stackIcon stackIcon4" />
          <FaNodeJs className="stackIcon stackIcon5" />
          <SiExpress className="stackIcon stackIcon6" />
          <SiMongodb className="stackIcon stackIcon7" />
          <FaCss3Alt className="stackIcon stackIcon8" />
          <FaHtml5 className="stackIcon stackIcon9" />
          <IoLogoFirebase className="stackIcon stackIcon10" />
        </div>
      </div>
    </section>
  );
}
