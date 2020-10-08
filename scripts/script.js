// JavaScript Document

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var deNav = document.querySelector("#navbar ul:first-of-type");
var deButton = document.querySelector("#navbar div button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    deNav.classList.toggle("toonMenu");
}

console.log(deButton);
console.log(deNav);

//alert("Hello dit is mijn page!");
