$(document).ready(function() {
    $("#button").on("click", function() {
      $("#modal").show();
      $(".modal-content").animate({width: "350px", height: "120px"});
    });
  
    $(document).on("click", ".close", function() {
      $("#modal").hide();
    });
  });