var deNav = document.querySelector("nav ul:first-of-type");
var deButton = document.querySelector("nav div button");
var body = document.querySelector("main");

function toggleMenu() {
    deNav.classList.toggle("toonMenu");
}

function sluiten() {
    deNav.classList.remove("toonMenu");
}

deButton.addEventListener("click", toggleMenu);
body.addEventListener('click', sluiten)

