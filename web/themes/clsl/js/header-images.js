(function($){
  $(function(){
    var paused = false;
    var carousel;
    
    $(function(){
      initCarousel();
    });
    function initCarousel(){
      $(".view-header-images").append("<div class='slick-dots-container'></div>")
      carousel = $(".view-header-images .view-content").slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        appendDots: ".slick-dots-container"
      });
      $(".view-header-images .slick-dots-container").prepend("<button type='button' class='slick-pause' title='Pause slideshow'>Pause slideshow</button>");
      $(".view-header-images .slick-pause").on("click", pauseClick);
    }
    function pauseClick(e) {
      $(e.target).toggleClass("is-paused");
      if (paused) {
        carousel.slick("slickPlay");
      } else {
        carousel.slick("slickPause");
      }
      paused = !paused;
    }
  });
})(jQuery);
