import React from "react";
import "../styles/ProjectCard.css";
import { IoIosLink } from "react-icons/io";
import { LiaLaptopCodeSolid } from "react-icons/lia";

interface ProjectCardProps {
  title: string;
  view: string;
  mobileView: string;
  desc: string;
  language: string[];
  repo: string;
  website: string;
  reverse: boolean;
}

export default function ProjectCard({
  title,
  view,
  mobileView,
  desc,
  language,
  repo,
  website,
  reverse,
}: ProjectCardProps) {
  return (
    <article className={reverse ? "projectCard" : "projectCardReverse"}>
      <div className="imgView">
        <img
          src={mobileView}
          alt="pr"
          className={reverse ? "mobileImg" : "mobileImgReverse"}
        />
        <img src={view} alt="pr" className="deskImg" />
      </div>
      <div className="projectInfo">
        <div className="projectTitle">{title}</div>
        <div className="description">{desc}</div>
        <div className="languagesView">
          {language.map((l, index) => {
            return (
              <img src={l} alt="language" className="language" key={index} />
            );
          })}
        </div>
        <div className="buttonsView">
          <a href={repo} target="_blank" rel="noreferrer" className="code">
            <LiaLaptopCodeSolid className="projectIcon" />
            <div>Code</div>
          </a>
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="website"
          >
            <IoIosLink className="projectIcon" />
            <div>See website</div>
          </a>
        </div>
      </div>
    </article>
  );
}
//claro que tengo experiencia, solo no he tenido la oprtunidad de trabajar con empresas como desarrollador
