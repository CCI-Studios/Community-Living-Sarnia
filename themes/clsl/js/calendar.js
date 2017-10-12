(function($){
  $(function(){  
    var $calendar = $(".view-events-calendar .calendar-calendar");
    if ($calendar.length) {
      $calendar.find("td.single-day").each(function(){
        if ($(this).hasClass("no-entry")) {
          console.log("td.date-box[data-date='"+$(this).data("date")+"']");
          $calendar.find("td.date-box[data-date='"+$(this).data("date")+"']").removeClass("has-event");
        }
      });
    }
  });
})(jQuery);
