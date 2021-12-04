const btn = document.querySelector(".logo")
const link = document.querySelector(".nav-links")
btn.addEventListener("click", function() {
    link.classList.toggle("show-links");
});