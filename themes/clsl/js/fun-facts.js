(function($){
  $(function(){  
    $(function(){
      var $rows = $(".view-fun-fact .views-row");
      if ($rows.length) {
        var min = 0;
        var max = $rows.length;
        var i = Math.floor(Math.random() * (max - min)) + min;
        $($rows.get(i)).show();
      }
    });
  });
})(jQuery);
