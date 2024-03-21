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

  let mapResort = new ymaps.Map("map-resort", {
    center: [67.597728, 33.0836],
    zoom: 19,
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

  let restoranMapPlacemark = new ymaps.Placemark([67.597676, 33.083244], {
    preset: "islands#darkOrangeStretchyIcon",
  });

  howToGet.geoObjects.add(howToGetPlacemark);
  mapResort.geoObjects.add(restoranMapPlacemark);
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

    $('.header__burger').on("click", function () {
      $('.sidebar').addClass("sidebar_active");
    });

  $(".important-info__btn").on("click", function () {
    $(this).siblings(".important-info__more").toggleClass("show");
  });

  var $slider = $("#slider-range");
   //Get min and max values
   var priceMin = $slider.attr("data-price-min"),
      priceMax = $slider.attr("data-price-max");

   //Set min and max values where relevant
   $("#price-filter-min, #price-filter-max").map(function(){
		$(this).attr({
			"min": priceMin,
			"max": priceMax
		});
	});
	$("#price-filter-min").attr({
		"placeholder": "min " + priceMin,
		"value": priceMin
	});
	$("#price-filter-max").attr({
		"placeholder": "max " + priceMax,
		"value": priceMax
	});

   $slider.slider({
      range: true,
      min: Math.max(priceMin, 0),
      max: priceMax,
      values: [priceMin, priceMax],
      slide: function(event, ui) {
         // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
         $("#price-filter-min").val(ui.values[0]);
         $("#price-filter-max").val(ui.values[1]);
      }
   });

   $("#price-filter-min, #price-filter-max").map(function(){
		$(this).on("input", function() {
			// let pmin = $("#price-filter-min").val(),
			// 	 pmax = $("#price-filter-max").val();
			// if( 
			// 	pmin >= priceMin //bigger than min
			// 	&& pmin <= pmax && pmax <= priceMax //smaller than max
			// ) {
			// 	updateSlider();
			// }
			updateSlider();
		});
	});
	function updateSlider(){
		$slider.slider("values", [$("#price-filter-min").val(), $("#price-filter-max").val()]);
	}
});
