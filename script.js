const burger = document.getElementById("burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Navbar Hintergrund beim Scrollen

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.9)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.6)";
  }

});
