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
});

// $(document).ready(function(){
//     $(document).scroll(function() {
//         if ($(this).scrollTop() > 100) {

//         };
//     });
// });