import me from "../assets/me 3.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={me} alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>
          I am a 4th-year Software Engineering student at Haramaya University, specializing in full-stack development with a solid foundation in both front-end and back-end technologies...
        </p>
      </div>
    </section>
  );
}

export default About;
