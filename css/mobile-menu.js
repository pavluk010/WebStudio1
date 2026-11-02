const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close__menu");
const backdrop = document.querySelector(".backdrop");

openButton.addEventListener("click", function () {
  backdrop.classList.remove("is__hidden");
});

closeButton.addEventListener("click", function () {
  backdrop.classList.add("is__hidden");
});