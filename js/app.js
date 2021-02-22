new Vue({
  el: "#app",
  data: {
    flag: true,
    activeLinkMenu: 0,
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
    gsap.utils.toArray(".parallax").forEach((section, i) => {
      section.bg = section.querySelector(".parallax-bg");
      console.log(section.bg);
      gsap.to(section.bg, {
        transform: `translate3d(0px, calc(0px - 200px), 0px)`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
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
