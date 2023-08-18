import initDropMenu from "./modules/dropDownMenu.js";

initDropMenu();

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
