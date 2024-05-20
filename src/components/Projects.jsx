import info from "../projects.js";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import Title from "./Title.tsx";

export default function Projects() {
  return (
    <section className="projectsContainer" id="projects">
      <Title title={"Projects"} />
      <div className="projects">
        {info.map((project, index) => (
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
    </section>
  );
}
