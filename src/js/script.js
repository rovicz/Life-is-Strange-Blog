import initDropMenu from "./modules/dropDownMenu.js";

const dropbtn = document.querySelector(".dropbtn");
dropbtn.addEventListener("click", initDropMenu);

if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "photos",
    time: 5000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
