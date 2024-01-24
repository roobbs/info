import info from "../projects.js";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
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
    </>
  );
}
