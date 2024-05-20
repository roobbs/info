import "../styles/About.css";
import Title from "./Title";

export default function About() {
  return (
    <section id="about" className="aboutSection">
      <Title title={"About me"} />
      <div className="aboutContainer">
        <div className="aboutDescription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quo
          quasi repudiandae facere accusamus reiciendis ipsa asperiores magni
          eos, facilis quae eaque ratione, recusandae qui eligendi laboriosam
          alias distinctio unde!
        </div>
        <div className="aboutPic">pic</div>
      </div>
    </section>
  );
}
