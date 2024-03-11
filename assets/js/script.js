var swiper = new Swiper(".afisha-swiper, .attractions-swiper, .stocks-swiper", {
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

$(function() {
    // whenever we hover over a menu item that has a submenu
    $('.sidebar ul').children('li').on('mouseover', function() {
      var $menuItem = $(this),
          $submenuWrapper = $('> ul', $menuItem);
      var menuItemPos = $menuItem.position();
      $submenuWrapper.css({
        top: menuItemPos.top,
        left: menuItemPos.left + Math.round($menuItem.outerWidth())
      });
    });
  });