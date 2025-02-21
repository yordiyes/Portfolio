import chat from "../assets/chat.jpg"; // Replace with the correct relative path
import coffeeShop from "../assets/coffee-shop.jpg";
import restaurant from "../assets/resturant.jpg";
import fasty from "../assets/fasty.jpg";
import todoList from "../assets/demo2.jpg";
import tindog from "../assets/tin-dog.jpg";
import weatherApp from "../assets/weather-app.jpg";
import ticTacToe from "../assets/tic-tac.jpg";
import E_learning from "../assets/E-learning.jpg";
import Tech_landing from "../assets/Tech_landing.jpg";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={Tech_landing} alt="Tech Landing Page" />
          <div className="portfolio-layer">
            <h4>Tech Landing Page</h4>
            <p>
              A sleek and modern landing page for showcasing tech products and
              services. Designed for startups, businesses, and developers to
              highlight features, engage users, and drive conversions with a
              responsive UI.
            </p>
            <a href="https://tech-landing-page-seven.vercel.app/">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={E_learning} alt="Chat App" />
          <div className="portfolio-layer">
            <h4>E Learning Site</h4>
            <p>
              Empower your learning journey with our e-learning platform!
              Whether you're a student looking to expand your knowledge or a
              teacher ready to share expertise.
            </p>
            <a href="https://e-learning-site-xi.vercel.app/">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={chat} alt="Chat App" />
          <div className="portfolio-layer">
            <h4>Chat Application</h4>
            <p>
              A full-stack chat app with real-time messaging and user
              authentication.
            </p>
            <a href="https://github.com/yordiyes/Chat-App">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

        {/* Restaurant Website */}
        <div className="portfolio-box">
          <img src={restaurant} alt="Restaurant Site" />
          <div className="portfolio-layer">
            <h4>Restaurant Website</h4>
            <p>
              A website for managing restaurant orders, menu items, and customer
              interactions.
            </p>
            <a href="https://resturant-site-three.vercel.app/">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

        {/* Coffee Shop Website */}
        <div className="portfolio-box">
          <img src={coffeeShop} alt="Coffee Shop Site" />
          <div className="portfolio-layer">
            <h4>Coffee Shop Website</h4>
            <p>
              A responsive site designed to display the menu and facilitate
              online ordering for a coffee shop.
            </p>
            <a href="https://coffee-shop-site-blue.vercel.app/">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

        {/* Fasty Internet Speed App */}
        <div className="portfolio-box">
          <img src={fasty} alt="How Fast Project" />
          <div className="portfolio-layer">
            <h4>Fasty Internet Speed</h4>
            <p>
              A web app that tracks and tests Internet speed, designed to get
              information about our connection.
            </p>
            <a href="https://github.com/yordiyes/How-Fast.git" target="_blank">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

        {/* To-Do List App */}
        <div className="portfolio-box">
          <img src={todoList} alt="To-Do List App" />
          <div className="portfolio-layer">
            <h4>To-Do List App</h4>
            <p>
              An app for managing personal tasks with features like adding,
              deleting, and updating tasks.
            </p>
            <a href="https://yordiyes.github.io/To-Do-List-App/">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

        {/* Tindog Site */}
        <div className="portfolio-box">
          <img src={tindog} alt="Tindog Site" />
          <div className="portfolio-layer">
            <h4>Tindog Site</h4>
            <p>
              A Tinder-inspired app for dog lovers to find their furry match.
            </p>
            <a href="https://tin-dog-site-project.vercel.app/">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

        {/* Weather Web App */}
        <div className="portfolio-box">
          <img src={weatherApp} alt="Weather App" />
          <div className="portfolio-layer">
            <h4>Weather Web App</h4>
            <p>
              A web application that displays real-time weather information.
            </p>
            <a href="https://weather-web-app-brown-theta.vercel.app/">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

        {/* Tic Tac Toe Game */}
        <div className="portfolio-box">
          <img src={ticTacToe} alt="Tic Tac Toe Game" />
          <div className="portfolio-layer">
            <h4>Tic Tac Toe Game</h4>
            <p>
              A simple and interactive Tic Tac Toe game built with JavaScript,
              HTML, and CSS.
            </p>
            <a
              href="https://yordiyes.github.io/Tic-Tac-Toe-Game/"
              target="_blank"
            >
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
