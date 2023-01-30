const questionBtns = document.querySelectorAll(".question-btn");

questionBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const a = e.currentTarget.parentElement.parentElement;
    a.classList.toggle("show-text");
  });
});
