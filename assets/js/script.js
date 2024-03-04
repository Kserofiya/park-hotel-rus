var afishaSwiper = new Swiper(".afisha-swiper, .attractions-swiper", {
    slidesPerView: 5.3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        425: {
            slidesPerView: 2.3,
        },
        1440: {
            slidesPerView: 4.3,
        },
        1620: {
            slidesPerView: 5.3,
        },
    }
});