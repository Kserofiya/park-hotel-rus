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
  },
});

ymaps.ready(init);
function init() {
  let howToGet = new ymaps.Map("map", {
    center: [67.597728, 33.0836],
    zoom: 13,
  });
  let howToGetPlacemark = new ymaps.Placemark(
    [67.597728, 33.0836],
    {
      iconContent: "текст",
    },
    {
      preset: "islands#darkOrangeStretchyIcon",
    }
  );
  howToGet.geoObjects.add(howToGetPlacemark);

  let mapResort = new ymaps.Map("map-resort", {
    center: [67.597728, 33.0836],
    zoom: 19,
  });
  let restoranMapPlacemark = new ymaps.Placemark([67.597676, 33.083244], {
    preset: "islands#darkOrangeStretchyIcon",
  });
  mapResort.geoObjects.add(restoranMapPlacemark);

  let mapAttractionDetail = new ymaps.Map("attractions-detail-map", {
    center: [67.568864, 36.713723],
    zoom: 7,
  });
  let mapAttractionDetailPlacemark = new ymaps.Placemark(
    [67.568864, 36.713723],
    {
      iconContent: "текст",
    },
    {
      preset: "islands#darkOrangeStretchyIcon",
    }
  );
  mapAttractionDetail.geoObjects.add(mapAttractionDetailPlacemark);
}

ymaps.ready(initMapAttractionDetail);
function initMapAttractionDetail() {
  let mapAttractionDetail = new ymaps.Map("attractions-detail-map", {
    center: [67.568864, 36.713723],
    zoom: 6,
  });
  let mapAttractionDetailPlacemark = new ymaps.Placemark(
    [67.568864, 36.713723],
    null,
    {
      iconLayout: "default#image",
      iconImageHref: "/assets/images/attraction_placemark.png",
      iconImageSize: [63, 63],
      iconCaption: "Кольский полуостров",
    }
  );
  mapAttractionDetail.geoObjects.add(mapAttractionDetailPlacemark);
}

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#scroll-to-top").fadeIn();
    } else {
      $("#scroll-to-top").fadeOut();
    }
  });

  $("#scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Sidebar menu
  $(".sidebar ul")
    .children("li")
    .on("mouseover", function () {
      var $menuItem = $(this),
        $submenuWrapper = $("> ul", $menuItem);
      var menuItemPos = $menuItem.position();
      $submenuWrapper.css({
        top: menuItemPos.top,
        left: menuItemPos.left + Math.round($menuItem.outerWidth()),
      });
    });

  $(".sidebar, .header__burger").on('mouseenter', function () {
    $(".sidebar").addClass("sidebar_active");
    $('body').css("overflowY", "hidden");
  });

  $(".sidebar, .header__burger").on('mouseleave', function () {
    $(".sidebar").removeClass("sidebar_active");
    $('body').css("overflowY", "scroll");
  });

  $(".important-info__btn").on("click", function () {
    $(this).siblings(".important-info__more").toggleClass("show");
  });

  var $slider = $("#slider-range");

  if($slider) {

    //Get min and max values
    var priceMin = $slider.attr("data-price-min"),
      priceMax = $slider.attr("data-price-max");
  
    //Set min and max values where relevant
    $("#price-filter-min, #price-filter-max").map(function () {
      $(this).attr({
        min: priceMin,
        max: priceMax,
      });
    });
    $("#price-filter-min").attr({
      placeholder: "min " + priceMin,
      value: priceMin,
    });
    $("#price-filter-max").attr({
      placeholder: "max " + priceMax,
      value: priceMax,
    });
  
    $slider.slider({
      range: true,
      min: Math.max(priceMin, 0),
      max: priceMax,
      values: [priceMin, priceMax],
      slide: function (event, ui) {
        // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        $("#price-filter-min").val(ui.values[0]);
        $("#price-filter-max").val(ui.values[1]);
      },
    });
  
    $("#price-filter-min, #price-filter-max").map(function () {
      $(this).on("input", function () {
        updateSlider();
      });
    });
    function updateSlider() {
      $slider.slider("values", [
        $("#price-filter-min").val(),
        $("#price-filter-max").val(),
      ]);
    }
  }

  $(window).on("resize", function () {
    if ($(this).width() <= 1299) {
      $(".rooms__right").insertAfter(".rooms__desc p");
    } else {
      $(".rooms__right").insertAfter(".rooms__left");
    }


    if ($(this).width() <= 1024) {
      $(".attractions-page__filters").prependTo("#filtersModal .modal-body");
    } else {
      $(".attractions-page__filters").prependTo(".attractions-page__wrapper");
    }
  });

  if ($(".attractions-page__items .attractions-page__item").length == 0) {
    $(".attractions-page__items").hide();
    $(".attractions-page__navigation").hide();
    $(".attractions-page__not-found").show();
  } else {
    $(".attractions-page__items").show();
    $(".attractions-page__navigation").show();
    $(".attractions-page__not-found").hide();
  }

  $(".reset-filters").on("click", function (e) {
    e.preventDefault();
    $("button.btn-reset").click();
  });
});
