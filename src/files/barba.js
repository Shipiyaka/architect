AOS.init({ offset: 150, duration: 1000 });

barba.init({
  views: [
    {
      namespace: "home",
      afterEnter(data) {
        sliderHero();
      },
    },
    {
      namespace: "gallery",
      afterEnter(data) {
        sliderGallery();
      },
    },
    {
      namespace: "articles",
      afterEnter(data) {
        sliderArticles();
      },
    },
    {
      namespace: "certif",
      afterEnter(data) {
        sliderCertif();
      },
    },
  ],
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
      once(data) {
        sliderHero();
      },
    },
  ],
});

// if (history.scrollRestoration) {
//   history.scrollRestoration = "manual";
// }
