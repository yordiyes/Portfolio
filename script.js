const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', ()=>{
    navbar.classList.toggle('navbar-on-scroll', window.scrollY > 0)
})