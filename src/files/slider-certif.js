document.addEventListener("DOMContentLoaded", () => {
  const slider_certif = new ItcSimpleSlider("#slider-certif", {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });

  document.querySelector(".btn-prev_certif").onclick = function () {
    slider_certif.prev();
  };
  document.querySelector(".btn-next_certif").onclick = function () {
    slider_certif.next();
  };
});
