import "../styles/About.css";
import Title from "./Title";
import codeImg from "../assets/coding.webp";

export default function About() {
  return (
    <section id="about" className="aboutSection">
      <Title title={"About me"} />
      <div className="aboutContainer">
        <div className="aboutDescription">
          As a self-taught enthusiast with a profound interest in technology and
          programming, I am dedicating myself to honing my skills through
          continuous learning and adaptation to this industry.
        </div>
        <img src={codeImg} alt="codeImg" className="aboutPic" />
        <div className="aboutDescription secondText">
          I like collaborative environments, where I can contribute my knowledge
          while learning from others (this is very important to me).
        </div>
      </div>
    </section>
  );
}
