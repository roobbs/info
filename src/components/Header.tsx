import React, { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import "../styles/Header.css";
import { Link as ScrollLink, Events } from "react-scroll";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {});
    Events.scrollEvent.register("end", function () {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className="header">
      <div className="headerName">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <div className="myName">roobbs</div>
      </div>
      <ul className="headerItems">
        <li>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={activeSection === "home" ? "active" : ""}
            onSetActive={() => setActiveSection("home")}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={activeSection === "projects" ? "active" : ""}
            onSetActive={() => setActiveSection("projects")}
          >
            Projects
          </ScrollLink>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
