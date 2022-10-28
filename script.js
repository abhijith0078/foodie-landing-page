console.log("working");

const navlink = document.querySelector(".header");

const btnIcon = document.querySelector(".btn-nav");

btnIcon.addEventListener("click", function () {
  navlink.classList.toggle("nav-open");
});

// sticky navbar using interceptionObserver
const hero = document.querySelector(".main-section");
const obs = new IntersectionObserver(
  function (arr) {
    const arr1 = arr[0];
    console.log(arr1);

    if (!arr1.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (arr1.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },

  {
    root: null,

    threshold: 0,
    rootMargin: "-50px",
  }
);

obs.observe(hero);

// Smooth scrolling

const links = document.querySelectorAll("a:link");
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
