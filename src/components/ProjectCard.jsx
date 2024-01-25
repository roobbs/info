import "../styles/ProjectCard.css";

export default function ProjectCard({
  title,
  view,
  mobileView,
  desc,
  language,
  repo,
  website,
}) {
  return (
    <article className="projectCard">
      <div className="imgView">
        <div className="projectTitle">{title}</div>
        <img src={mobileView} alt="pr" className="mobileImg" />
        <img src={view} alt="pr" className="deskImg" />
      </div>
      <div className="description">{desc}</div>
      <div className="languages">{language}</div>
      <div className="buttonsView">
        <a href={repo} target="_blank" rel="noreferrer">
          <button className="code">Code</button>
        </a>
        <a href={website} target="_blank" rel="noreferrer">
          <button className="website">See website</button>
        </a>
      </div>
    </article>
  );
}
//claro que tengo experiencia, solo no he tenido la oprtunidad de trabajar con empresa como desarrollador