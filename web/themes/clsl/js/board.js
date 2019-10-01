(function($){
  var $teaserContainer;
  var $popupContainer;
  var $overlay;

  $(function(){
    $teaserContainer = $(".view-board-members.view-display-id-block_teasers");
    $popupContainer = $(".view-board-members.view-display-id-block_popups");
    if ($teaserContainer.length) {
      createOverlay();
      bindEvents();
      openPopupOnLoad();
    }
  });

  function bindEvents() {
    $teaserContainer.on("click", ".link", clickOpen);
    $popupContainer.on("click", ".close", clickClose);
    $overlay.on("click", clickOverlay);
  }
  function openPopupOnLoad() {
    if (window.location.hash && window.location.hash.substr(0, 6) == "#node-") {
      var nid = window.location.hash.substr(6);
      openPopup(nid);
    }
  }
  function clickOpen() {
    var nid = $(this).closest(".node").data("nid");
    openPopup(nid);
    window.history.replaceState({nid:nid}, "", "#node-"+nid);
    return false;
  }
  function clickClose() {
    closePopup();
    return false;
  }
  function clickOverlay() {
    closePopup();
    return false;
  }
  function openPopup(nid) {
    $("#node-"+nid).show().toggleClass("open");
    toggleOverlay();
  }
  function closePopup() {
    $popupContainer.find(".open").hide().toggleClass("open");
    toggleOverlay();
    window.history.replaceState({}, "", "#");
  }
  function createOverlay() {
    $("body").append("<div class='bio-overlay' style='display:none;'></div>");
    $overlay = $(".bio-overlay");
  }
  function toggleOverlay() {
    $overlay.toggle();
  }
})(jQuery);
