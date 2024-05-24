import React from "react";
import "../styles/ProjectCard.css";
import "../styles/MobileProjectCard.css";
import { LiaLaptopCodeSolid } from "react-icons/lia";

interface ProjectCardProps {
  title: string;
  view: [string];
  desc: string;
  language: string[];
  repo: string;
  reverse: boolean;
}

export default function MobileProjectCard({
  title,
  view,
  desc,
  language,
  repo,
  reverse,
}: ProjectCardProps) {
  return (
    <article className={reverse ? "projectCard" : "projectCardReverse"}>
      <div className="imgViewMobile">
        {view.map((img) => (
          <img src={img} alt="pr" className="deskImg" />
        ))}
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
            <div>Repository</div>
          </a>
        </div>
      </div>
    </article>
  );
}
//claro que tengo experiencia, solo no he tenido la oprtunidad de trabajar con empresas como desarrollador
