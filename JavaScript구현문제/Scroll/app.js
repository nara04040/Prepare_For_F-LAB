const navbar = document.querySelector("nav");
// fix nav
const fixNav = () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
};

window.addEventListener("scroll", fixNav);
