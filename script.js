const slides = document.querySelectorAll(".slide");
const bar = document.querySelector(".bar");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current = 0;

function updateSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[current].classList.add("active");
  bar.style.width = ((current + 1) / slides.length) * 100 + "%";
}

next.addEventListener("click", () => {
  if (current < slides.length - 1) current++;
  updateSlide();
});

prev.addEventListener("click", () => {
  if (current > 0) current--;
  updateSlide();
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") next.click();
  if (e.key === "ArrowLeft") prev.click();
});

updateSlide();
