(function($){
  $(function(){  
    var $container = $(".view-job-postings .view-content");
    if ($container.length) {
      $container.on("click", ".node__title a", function(){
        $(this).toggleClass("open");
        $(this).closest(".node").find(".node__content").slideToggle();
        return false;
      });
    }
  });
})(jQuery);
