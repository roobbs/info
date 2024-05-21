import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { Link as ScrollLink, Events } from "react-scroll";
import { IoIosGitMerge } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

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
        <IoIosGitMerge size={30} />
        <div>roobbs</div>
      </div>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="headerIcons">
        <MdMenu className="menuIcon" size={40} />
        <IoClose className="closeIcon" size={40} />
      </label>

      <nav className="headerItems">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={activeSection === "home" ? "active" : ""}
          onSetActive={() => setActiveSection("home")}
        >
          Home
        </ScrollLink>

        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={activeSection === "projects" ? "active" : ""}
          onSetActive={() => setActiveSection("projects")}
        >
          Projects
        </ScrollLink>

        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={activeSection === "about" ? "active" : ""}
          onSetActive={() => setActiveSection("about")}
        >
          About
        </ScrollLink>

        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={activeSection === "contact" ? "active" : ""}
          onSetActive={() => setActiveSection("contact")}
        >
          Contact
        </ScrollLink>
      </nav>
    </div>
  );
}
