$(function(){
  $(document).on("click", ".paragraph--type--collapsible-content .field--name-field-title a", function(){
    $(this).closest(".paragraph").toggleClass("open").find(".field--name-field-body").slideToggle();
    return false;
  });
});
