import "../styles/About.css";
import Title from "./Title";

export default function About() {
  return (
    <section id="about" className="aboutSection">
      <Title title={"About me"} />
      <div className="aboutContainer">
        <div className="aboutDescription">
          As a self-taught enthusiast with a profound interest in technology and
          programming, I am dedicating myself to honing my skills through
          continuous learning and adaptation to this industry. <br />
          <br /> I like collaborative environments, where I can contribute my
          knowledge while learning from others (this is very important to me).
        </div>
        <div className="aboutPic">pic</div>
      </div>
    </section>
  );
}
