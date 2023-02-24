AOS.init({ offset: 0, duration: 0 });

history.scrollRestoration = "manual";
let scrollPosY = [0];

barba.hooks.enter((data) => {
  if (data.trigger !== "back") {
    scrollPosY.push(barba.history.current.scroll.y);
  }
});

barba.hooks.after((data) => {
  if (data.trigger !== "back") {
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, scrollPosY.pop());
  }
});

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".preloading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".preloading-screen", {
    duration: 1,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  });
  tl.set(".preloading-screen", { left: "-100%" });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition(data);
        await delay(1000);
        done();
      },

      async enter(data) {
        // contentAnimation();
      },

      async once(data) {
        // contentAnimation();
        sliderHero();
      },
    },
  ],

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
});
