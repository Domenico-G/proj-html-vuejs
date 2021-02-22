new Vue({
  el: "#app",
  data: {
    slogan:
      "We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.",
    menuLink: [
      {
        name: "home",
        url: "#home",
      },
      {
        name: "about",
        url: "#",
      },
      {
        name: "service",
        url: "#",
      },
      {
        name: "work",
        url: "#",
      },
      {
        name: "article",
        url: "#",
      },
      {
        name: "get quote",
        url: "#",
      },
    ],
    skills: [
      {
        startNumber: 0,
        endNumber: 3553,
        iconCode: "fas fa-suitcase",
        text: "Planning applications",
      },
      {
        startNumber: 0,
        endNumber: 896,
        iconCode: "far fa-building",
        text: "Completed projects",
      },
      {
        startNumber: 0,
        endNumber: 172,
        iconCode: "fas fa-users",
        text: "Trained professionals",
      },
      {
        startNumber: 0,
        endNumber: 19,
        iconCode: "fas fa-globe",
        text: "International offices",
      },
    ],
  },
  mounted() {
    // effetto parallasse
    gsap.utils.toArray(".parallax").forEach((el, i) => {
      el.bg = el.querySelector(".parallax-bg");
      console.log(el.bg);
      gsap.to(el.bg, {
        transform: `translate3d(0px, calc(0px - 200px), 0px)`,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      });
    });
    // effetto contatore numeri
    this.skills.forEach((el) => {
      gsap.to(el, {
        duration: 3,
        startNumber: el.endNumber,
        scrollTrigger: ".separatore-bottom",
      });
    });
  },
});
Vue.config.devtools = true;
