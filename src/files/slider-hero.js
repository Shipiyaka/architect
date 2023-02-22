const sliderHero = () => {
  const slider_hero = new ItcSimpleSlider("#slider-hero", {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });

  document.querySelector(".btn-prev_hero").onclick = function () {
    slider_hero.prev();
  };
  document.querySelector(".btn-next_hero").onclick = function () {
    slider_hero.next();
  };
};
