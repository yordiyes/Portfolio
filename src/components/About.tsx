import me from "../assets/me 3.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={me} alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>
          I am a 4th-year Software Engineering student at Haramaya University
          with a specialization in full-stack development. I have a strong
          foundation in front-end and back-end technologies, and I am passionate
          about building scalable and user-friendly applications. My skill set
          includes proficiency in JavaScript, React, Node.js, and MongoDB, and I
          have experience working on collaborative projects, contributing to
          open-source, and creating dynamic web solutions. I thrive
          in learning new tools and technologies, solving problems using data
          structures and algorithms, and delivering impactful software
          solutions.
        </p>
      </div>
    </section>
  );
}

export default About;
