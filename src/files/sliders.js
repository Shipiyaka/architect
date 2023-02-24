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

const sliderCertif = () => {
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
};
