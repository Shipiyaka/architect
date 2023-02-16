document.addEventListener("DOMContentLoaded", () => {
  // инициализация слайдера
  // const slider = new ItcSimpleSlider(".itcss");
  const slider = new ItcSimpleSlider("#slider-hero", {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
  // назначим обработчик при нажатии на кнопку .btn-prev
  document.querySelector(".btn-prev").onclick = function () {
    // перейдём к предыдущему слайду
    slider.prev();
  };
  // назначим обработчик при нажатии на кнопку .btn-next
  document.querySelector(".btn-next").onclick = function () {
    // перейдём к следующему слайду
    slider.next();
  };
});
