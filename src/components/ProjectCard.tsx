import React from "react";
import "../styles/ProjectCard.css";

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
          <a href={repo} target="_blank" rel="noreferrer">
            <button className="code">Code</button>
          </a>
          <a href={website} target="_blank" rel="noreferrer">
            <button className="website">See Website</button>
          </a>
        </div>
      </div>
    </article>
  );
}
//claro que tengo experiencia, solo no he tenido la oprtunidad de trabajar con empresas como desarrollador
