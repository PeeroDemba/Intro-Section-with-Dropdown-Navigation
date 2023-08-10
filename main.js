"use strict";

const menupart = document.getElementById("menupart");
const mp = document.getElementById("mp");
const menuclose = document.getElementById("menuclose");
const menu = document.getElementById("menu");
const hero = document.getElementsByClassName("hero")[0];

function switchopen() {
  menupart.className = "show";
  mp.className = "overlay";
}

function switchclose() {
  menupart.className = "hide";
  mp.className = "hide";
}

menu.addEventListener("click", switchopen);
menuclose.addEventListener("click", switchclose);

let mq = window.matchMedia("(max-width: 767px)");

function sizer() {
  if (mq.matches) {
    hero.src = "./images/image-hero-mobile.png";
  } else {
    hero.src = "./images/image-hero-desktop.png";
    menupart.className = "hide";
    mp.className = "hide";
  }
}

window.addEventListener("resize", sizer);
