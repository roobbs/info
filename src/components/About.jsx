import "../styles/About.css";
import Title from "./Title";
import { MdNavigateNext } from "react-icons/md";
import { SiCodewars } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

export default function About() {
  const codeImg =
    "https://github-readme-stats.vercel.app/api?username=roobbs&show_icons=true&locale=en&theme=nightowl&rank_icon=percentile&hide_border=true";
  return (
    <section id="about" className="aboutSection">
      <Title title={"About me"} />
      <div className="aboutContainer">
        <div className="aboutDescription">
          I have a deep passion for technology, I am committed to continuous
          learning and improvement. My drive to create and improve fuels my
          motivation and desire to try and embrace new challenges.
        </div>
        <div className="aboutGithub">
          <div className="aboutDescription">
            Take a look at my Github profile stats!{" "}
            <MdNavigateNext color="#00E0FF" size={30} />
          </div>
          <a href="https://github.com/roobbs" className="githubStats">
            <img src={codeImg} alt="codeImg" className="aboutPic" />
          </a>
        </div>
      </div>
      <div className="aboutDescription">
        I enjoy solving problems and learning from them at:
        <div className="aboutButtons">
          <a
            className="homeBtn"
            href="https://leetcode.com/u/roobbs/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode className="icon" />
            <div>LeetCode</div>
          </a>
          <a
            className="homeBtn"
            href="https://www.codewars.com/users/roobbs"
            target="_blank"
            rel="noreferrer"
          >
            <SiCodewars className="icon" />
            <div>Codewars</div>
          </a>
        </div>
      </div>
    </section>
  );
}
