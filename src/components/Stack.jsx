import "../styles/Stack.css";
import git from "../assets/git.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.svg";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import npm from "../assets/npm.png";

export default function Stack() {
  const tools = [git, github, js, react, node, html, css, mongo, npm];
  return (
    <section className="tools">
      <div>My skills and tools: </div>
      <div className="toolsContainer">
        {tools.map((tool, index) => (
          <img src={tool} className="toolImg" key={index} />
        ))}
      </div>
    </section>
  );
}
