const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close-menu");
const backdrop = document.querySelector(".backdrop");
const overlay = document.querySelector(".overlay");

function openMenu() {
    backdrop.classList.remove("is-hidden");
    overlay.classList.add("is-open");
}

function closeMenu() {
    backdrop.classList.add("is-hidden");
    overlay.classList.remove("is-open");
}

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);