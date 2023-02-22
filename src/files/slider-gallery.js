const sliderGallery = () => {
  const slider_gallery = new ItcSimpleSlider("#slider-gallery", {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });

  document.querySelector(".btn-prev_gallery").onclick = function () {
    slider_gallery.prev();
  };
  document.querySelector(".btn-next_gallery").onclick = function () {
    slider_gallery.next();
  };
};
