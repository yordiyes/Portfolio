let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navBar");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navBar.classList.toggle("active");
};

navLinks.forEach((link) => {
  link.onclick = () => {
    menuIcon.classList.remove("fa-x");
    navBar.classList.remove("active");
  };
});

let sections = document.querySelectorAll("section");
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("fa-x");
  navBar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Fullstack developer","Frontend Developer",  "Backend Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelap: 1000,
  loop: true,
});
