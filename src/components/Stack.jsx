import "../styles/Stack.css";
import git from "../assets/git.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.svg";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import Title from "./Title";

export default function Stack() {
  const tools = [git, js, react, node, html, css, mongo];
  return (
    <section className="tools">
      <Title title={"Stack"} />
      <div className="toolsContainer">
        {tools.map((tool, index) => (
          <img src={tool} className="toolImg" key={index} />
        ))}
      </div>
    </section>
  );
}
