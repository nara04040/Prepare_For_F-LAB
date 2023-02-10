const navbar = document.querySelector("nav");
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const navHeight = navbar.getBoundingClientRect().height;
// fix nav
const fixNav = () => {
  const scrollHeight = window.pageYOffset;
  console.log(navHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
};

window.addEventListener("scroll", fixNav);

// fix nav position
const navLinks = document.querySelectorAll(".scroll-link");
navLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    // id는 선언한 id를 뜻한다.
    const element = document.getElementById(id);
    // containerHeight : links의 높이
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // navbar에 fixed-nav가 포함되어 있는지 확인
    const fixedNav = navbar.classList.contains("fixed-nav");
    // console.log(fixedNav);
    // position : links의 상단에서부터 픽셀값 - links의 높이값
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      // navbar에 fixed-nav가 없다면
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
