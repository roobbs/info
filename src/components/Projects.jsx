import info from "../projects.js";
import ProjectCard from "./ProjectCard";
import MobileProjectCard from "./MobileProjectCard";
import "../styles/Projects.css";
import Title from "./Title.tsx";

export default function Projects() {
  const webApps = info.web;
  const mobileApps = info.mobile;
  return (
    <section className="projectsSection" id="projects">
      <Title title={"Projects"} />
      <div className="projectTypeContainer">
        <div className="projectType">
          Web Applications <div className="projectPoint">.</div>
        </div>
        <div className="projects">
          {webApps.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              view={project.view}
              mobileView={project.mobileView}
              desc={project.description}
              language={project.language}
              repo={project.repo}
              website={project.website}
              reverse={index % 2 === 0}
            />
          ))}
        </div>
      </div>
      <div className="projectTypeContainer">
        <div className="projectType">
          Mobile Apps<div className="projectPoint">.</div>
        </div>
        <div className="projects">
          {mobileApps.map((project, index) => (
            <MobileProjectCard
              key={project.id}
              title={project.title}
              view={project.view}
              desc={project.description}
              language={project.language}
              repo={project.repo}
              reverse={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
