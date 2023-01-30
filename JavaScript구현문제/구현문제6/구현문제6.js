const modalBtn = document.querySelector(".modal-btn");
const colseBtn = document.querySelector(".close-btn");
const openOverlay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", () => {
  openOverlay.classList.add("open-modal");
});

colseBtn.addEventListener("click", () => {
  openOverlay.classList.remove("open-modal");
});
