(function($){
  $(function(){
    var $container = $(".view-events-calendar");
    if ($container.length == 0) return;

    

    var options = {};
    options.header = {left:'', right:''};
    options.fixedWeekCount = false;
    var yyyymm = $container.find(".view-header [data-date]").attr("data-date");
    options.defaultDate = yyyymm.substr(0,4)+"-"+yyyymm.substr(4);
    options.events = [];
    $container.find("> .view-content .views-row").each(function(){
      var event = {};
      event.start = $(this).find("time").text().trim();
      event.title = $(this).find(".views-field-title .field-content a").text();
      event.url = $(this).find(".views-field-title .field-content a").attr("href");
      options.events.push(event);
    });
    options.eventRender = function(event, element, view) {
      element.attr("data-date", event.start.format("YYYY-MM-DD"));
      view.el.find(".fc-bg, .fc-content-skeleton").find("[data-date="+event.start.format("YYYY-MM-DD")+"]").addClass("has-event");
      return element;
    };
    $container.find("> .view-header").after("<div class='calendar-container'></div>");
    $container.find(".calendar-container").fullCalendar(options);

    $(".list-button").on("click", function(){
      switchToListView();
      return false;
    });
    $(".calendar-button").on("click", function(){
      switchToCalendarView();
      return false;
    });
    if (window.sessionStorage.getItem("list_view")) {
      switchToListView();
    }
  });

  function switchToCalendarView() {
    $(".view-events-calendar").removeClass("show-list-view");
    window.sessionStorage.removeItem("list_view", false);
  }
  function switchToListView() {
    $(".view-events-calendar").addClass("show-list-view");
    window.sessionStorage.setItem("list_view", true);
  }
})(jQuery);
