const openModalBtn = document.querySelector(".open");
const closeBtnModal = document.querySelector(".close-menu");
const backdropRef = document.querySelector(".backdrop");

console.log(openModalBtn);
console.log(closeBtnModal);
console.log(backdropRef);

openModalBtn.addEventListener("click", () => {
    backdropRef.classList.remove("is-hidden");
});

closeBtnModal.addEventListener("click", () => {
    backdropRef.classList.add("is-hidden");
});