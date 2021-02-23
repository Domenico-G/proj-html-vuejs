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
    social: [
      { iconCode: "fab fa-facebook-f", url: "#" },
      { iconCode: "fab fa-twitter", url: "#" },
      { iconCode: "fab fa-youtube", url: "#" },
      { iconCode: "fab fa-instagram", url: "#" },
    ],
    contactWidget: [
      {
        description:
          "Corporate Location 1600 Amphitheatre Parkway London WC11BA",
        iconCode: "fas fa-globe",
      },
      {
        description:
          "Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA",
        iconCode: "fas fa-home",
      },
      {
        description: "1.800.458.556 / 1.800.532.2112",
        iconCode: "fas fa-phone",
      },
      {
        description: "info@your-domain.com",
        iconCode: "far fa-envelope",
      },
      {
        description: "Monday - Friday: 9:00 AM - 6:00 PM",
        iconCode: "far fa-clock",
      },
      {
        description: "Saturday - Sunday: 9:00 AM - 12:00 PM",
        iconCode: "far fa-clock",
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
