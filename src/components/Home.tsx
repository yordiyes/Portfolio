import { useEffect } from "react";
import Typed from "typed.js";  
import me from "../assets/me.png";

function Home() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Frontend Developer", "Backend Developer","Fullstack Developer" ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []); 

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi 👋</h3>
        <h1>Yordanos Yeshitla</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3> 
        <p>
          A dedicated Software Engineering student with a focus on full-stack development and <br />
          problem-solving. Continuously learning and striving to build efficient, user-friendly <br />
          applications that bring ideas to life.
        </p>
        <div className="social-media">
          <a href="https://t.me/yordiyes" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-telegram"></i></a>
          <a href="https://github.com/yordiyes" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/yordanos-yeshitla-290687285/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/yordi.yes/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <a href="./images/Resume.pdf" className="btn">Download Cv</a>
      </div>
      <div className="home-img">
        <img src={me} alt="Yordanos Yeshitla" />
      </div>
    </section>
  );
}

export default Home;
