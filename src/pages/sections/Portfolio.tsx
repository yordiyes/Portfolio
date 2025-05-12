import chat from "../../assets/chat.jpg"; // Replace with the correct relative path
import coffeeShop from "../../assets/coffee-shop.jpg";
import restaurant from "../../assets/resturant.jpg";
import fasty from "../../assets/fasty.jpg";
import tindog from "../../assets/tin-dog.jpg";
import E_learning from "../../assets/E-learning.jpg";
import Tech_landing from "../../assets/Tech_landing.jpg";
import TaskManagementApp from "../../assets/TaskManagementApp.png";
import hudc from "../../assets/hudc.jpg";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img
            src={hudc}
            alt="Haramaya University Developers Community Website"
          />
          <div className="portfolio-layer">
            <h4>Haramaya University Developers Community Website</h4>
            <p>
              The official repository for the Haramaya University Developers
              Community website as Frontend Developer.
            </p>
            <a href="https://hudc.org">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={TaskManagementApp} alt="Task Management App" />
          <div className="portfolio-layer">
            <h4>Task Management App</h4>
            <p>
              A simple and intuitive task management application that allows
              users to add, update, and delete tasks. With a focus on
              functionality and ease of use, this app helps users stay
              organized, track their progress, and prioritize their to-dos
              effectively.
            </p>
            <a href="https://task-management-site-three.vercel.app">
              <i className="fa-solid fa-share-from-square"></i>
            </a>
          </div>
        </div>

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
      </div>
    </section>
  );
}

export default Portfolio;
