/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

const swiperExam = new Swiper(".home__swiper", {
  // Optional parameters
  loop: true,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: "auto",
    },
    1152: {
      slidesPerView: 3,
      centeredSlides: "auto",
      spaceBetween: -64,
    },
  },
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
});

sr.reveal(`.home__swiper, .home__footer`);
sr.reveal(`.home__circle`, { scale: 1.5, delay: 300 });
sr.reveal(`.home__subcircle`, { scale: 1.5, delay: 300 });
sr.reveal(`.home__title`, { scale: 1, origin: "bottom", delay: 1200 });
sr.reveal(`.swiper-button-prev, .swiper-button-next`, {
  origin: "bottom",
  delay: 1200,
});
