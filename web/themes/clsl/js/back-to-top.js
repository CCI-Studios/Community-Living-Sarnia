(function($){
  var $block;
  
  $(function(){
    $block = $(".block--back-to-top");
    $(window).on("scroll", updateBlockVisibility);
    $(window).on("load", updateBlockVisibility);
  });
  
  function updateBlockVisibility() {
    if ($(window).scrollTop() > 150) {
      $block.addClass("show");
    } else {
      $block.removeClass("show");
    }
  }
})(jQuery);
