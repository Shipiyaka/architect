const sliderArticles = () => {
  const slider_articles = new ItcSimpleSlider("#slider-articles", {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });

  document.querySelector(".btn-prev_articles").onclick = function () {
    slider_articles.prev();
  };
  document.querySelector(".btn-next_articles").onclick = function () {
    slider_articles.next();
  };
};
