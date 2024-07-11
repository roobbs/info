import "../styles/About.css";
import Title from "./Title";
import { MdNavigateNext } from "react-icons/md";
// import codeImg from "../assets/coding.webp";

export default function About() {
  const codeImg =
    "https://github-readme-stats.vercel.app/api?username=roobbs&show_icons=true&locale=en&theme=tokyonight&rank_icon=percentile";
  return (
    <section id="about" className="aboutSection">
      <Title title={"About me"} />
      <div className="aboutContainer">
        <div className="aboutGithub">
          <div className="aboutDescription">
            Take a look at my Github profile stats!{" "}
            <MdNavigateNext color="#00E0FF" size={30} />
          </div>
          <img src={codeImg} alt="codeImg" className="aboutPic" />
        </div>
        <div className="aboutDescription">
          I have a deep passion for technology, I am committed to continuous
          learning and improvement. My drive to create and improve fuels my
          motivation and desire to try and embrace new challenges.
        </div>
      </div>
      {/* <div className="aboutDescription">
        If you want to know me better, <a href="">see my blog page</a>.
      </div> */}
    </section>
  );
}
