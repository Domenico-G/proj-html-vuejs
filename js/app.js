new Vue({
  el: "#app",
  data: {
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
  },
});
Vue.config.devtools = true;
