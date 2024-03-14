var swiper = new Swiper(".afisha-swiper, .attractions-swiper, .stocks-swiper", {
    slidesPerView: 4,
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
        320: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 4,
        },
        1620: {
            slidesPerView: 5,
        },
    }
});

ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [67.597728, 33.0836],
    zoom: 13
  });

  let myPlacemark = new ymaps.Placemark(
    [67.597728, 33.0836],
    {
      iconContent: 'текст'
    }, {
    preset: 'islands#darkOrangeStretchyIcon'
  }
  );

  myMap.geoObjects.add(myPlacemark);
}

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