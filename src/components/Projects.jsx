import info from "../projects.js";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import git from "../assets/git.png";
import github from "../assets/github.png";

export default function Projects() {
  const tools = [git, github];
  return (
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
  );
}
