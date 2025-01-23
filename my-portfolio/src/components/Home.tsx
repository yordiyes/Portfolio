import me from "../assets/me.png";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi 👋</h3>
        <h1>Yordanos Yeshitla</h1>
        <h3>And I'm a <span className="multiple-text">Frontend Developer</span></h3>
        <p>
          A dedicated Software Engineering student with a focus on full-stack development and <br />
          problem-solving. Continuously learning and striving to build efficient,user-friendly <br />
          applications that bring ideas to life.
        </p>
        <div className="social-media">
          <a href="https://t.me/yordiyes" target="_blank"><i className="fa-brands fa-telegram"></i></a>
          <a href="https://github.com/yordiyes" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/yordanos-yeshitla-290687285/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/yordi.yes/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <a href="./images/Resume.pdf" className="btn">Download Cv</a>
      </div>
      <div className="home-img">
        <img src={me} alt="" />
      </div>
    </section>
  );
}

export default Home;
