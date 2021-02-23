new Vue({
  el: "#app",
  data: {
    testimonialIndex: 0,
    buttonShow: 0,
    offSet: 0,
    flagButton: false,
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
    testimonial: [
      {
        img: "img/testimonial.jpg",
        text:
          "“No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property.”",
        name: "HARRY SMITH • NEW HOME OWNER",
      },
      {
        img: "img/testimonial-2.jpg",
        text:
          "“Many novice real estate investors soon quit the profession and invest. When you invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving money shelter you from.”",
        name: "JOHN DOE • PROPERTY INVESTOR",
      },
    ],
  },
  mounted() {
    // evento per pulsante back to top
    this.buttonShow = document.querySelector(".jumbotron").offsetTop;
    let self = this;
    window.addEventListener("scroll", function () {
      self.offSet = window.pageYOffset;
      if (self.offSet > self.buttonShow) {
        self.flagButton = true;
      } else {
        self.flagButton = false;
      }
    });

    // dinamicizzazione testimonial
    setInterval(function () {
      if (self.testimonialIndex < self.testimonial.length - 1) {
        self.testimonialIndex += 1;
      } else {
        self.testimonialIndex = 0;
      }
    }, 7000);

    // effetto parallasse
    gsap.utils.toArray(".parallax").forEach((el, i) => {
      el.bg = el.querySelector(".parallax-bg");
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
  methods: {
    // funzione selezione testimonial
    changeTestimonial: function (index) {
      this.testimonialIndex = index;
    },
  },
});
Vue.config.devtools = true;
