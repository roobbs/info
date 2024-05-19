import info from "../projects.js";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="container">
      <div className="projectsTitle">My projects:</div>
      <div className="projects">
        {info.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            view={project.view}
            mobileView={project.mobileView}
            desc={project.description}
            language={project.language}
            repo={project.repo}
            website={project.website}
          />
        ))}
      </div>
    </div>
  );
}
