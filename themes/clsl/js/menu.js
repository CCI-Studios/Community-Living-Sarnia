(function($){
  $(function(){  
    $(".menu-btn").on("click", toggleMenu);
  });
  function toggleMenu() {
    $(".block--main-menu").toggle();
    return false;
  }
})(jQuery);
