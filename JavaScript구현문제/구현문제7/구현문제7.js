const questionBtns = document.querySelectorAll(".question-btn");

questionBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const plusToggleButton = e.currentTarget.parentElement.parentElement;
    plusToggleButton.classList.toggle("show-text");
  });
});
