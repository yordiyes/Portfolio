import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <a href="#home" className="logo">
        Portfolio
      </a>
      <i
        className={`fa-solid ${menuActive ? "fa-xmark" : "fa-bars"}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      <nav className={`navBar ${menuActive ? "active" : ""}`}>
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={() => setMenuActive(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={() => setMenuActive(false)}
        >
          About
        </a>
        <a
          href="#services"
          className={activeSection === "services" ? "active" : ""}
          onClick={() => setMenuActive(false)}
        >
          Services
        </a>
        <a
          href="#portfolio"
          className={activeSection === "portfolio" ? "active" : ""}
          onClick={() => setMenuActive(false)}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => setMenuActive(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
