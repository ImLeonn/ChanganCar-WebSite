document.addEventListener('DOMContentLoaded', function() {

  var card1 = $("#cardLeft");
  var card2 = $("#cardCenterTop");
  var card3 = $("#cardCenterBottom");
  var card4 = $("#cardRight");
  var isMediumScreen = (window.innerWidth <= 1199 && window.innerWidth > 899);

  function styleCardsByScreen() {
    var windowWidth = window.innerWidth;

    if (windowWidth <= 1199 && windowWidth > 899 && card2.parent().is(".centerCards") && card3.parent().is(".centerCards") && !card1.parent().is(".leftCards")) {
      card2.unwrap();
      card1.add(card3).wrapAll("<div class='leftCards'></div>");
      card2.add(card4).wrapAll("<div class='rightCards'></div>");
      isMediumScreen = true; 
    } else if (windowWidth > 1199 && isMediumScreen) {
        card1.add(card3).unwrap();
        card2.add(card4).unwrap();
        card3.insertAfter(card2);
        card2.add(card3).wrapAll("<div class='centerCards'></div>");
        isMediumScreen = false;
    } else if(windowWidth <= 899 && card1.parent().is(".leftCards")){
        card1.add(card3).unwrap();
        card2.add(card4).unwrap();
        card3.insertAfter(card2);
        card2.add(card3).wrapAll("<div class='centerCards'></div>");
    }
  }

  styleCardsByScreen();
  $(window).resize(function() {
    styleCardsByScreen();
  });

  //change Images depending on screen size
  function changeImgMedium(){
    var windowWidth = window.innerWidth;

    if (windowWidth <= 899){
      $('.card1car').attr('src', './img/card1carSmall.svg');
      $('.carCornerImg').attr('src', './img/card2carSmall.svg');
      $('.phoneCornerImg').attr('src', './img/card3phoneSmall.svg');
      $('.rightCar').attr('src', './img/card4carSmall.svg');
    }  else if (windowWidth > 899 && windowWidth <= 1199){
      $('.card1car').attr('src', './img/card1car.png');
        $('.carCornerImg').attr('src', './img/carMedium.svg');
        $('.phoneCornerImg').attr('src', './img/phoneMedium.svg');
        $('.rightCar').attr('src', './img/carright.svg');
    } else {
      $('.card1car').attr('src', './img/card1car.png');
      $('.carCornerImg').attr('src', './img/topcardcar.png');
      $('.phoneCornerImg').attr('src', './img/phoneImg1.png');
      $('.rightCar').attr('src', './img/carright.svg');
    }
  }

  $(window).on("load resize", changeImgMedium);

  //change Images and card background for small screen

  function changeCardBackSmall() {
    var windowWidth = window.innerWidth;

    if (windowWidth <= 899) {
        $('.cardBackground').attr('src', './img/smallCardBackground.svg');
    } else {
        $('.cardBackground').each(function() {
            var originalSrc = $(this).data('original-src');
            $(this).attr('src', originalSrc);
        });
    }
}

$(document).ready(function() {
    // Сохраняем исходные src изображений в data-атрибуты
    $('.cardBackground').each(function() {
        var originalSrc = $(this).attr('src');
        $(this).data('original-src', originalSrc);
    });


    $(window).on('resize', changeCardBackSmall);
    changeCardBackSmall();
});



})