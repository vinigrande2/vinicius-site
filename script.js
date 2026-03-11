const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Abre/Fecha menu ao clicar no hambúrguer
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
