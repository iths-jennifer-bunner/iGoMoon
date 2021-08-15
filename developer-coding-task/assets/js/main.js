(function($) {
  $(document).ready(function() {
    $("input:first-child").focus(function() {
      $("#show")
        .removeClass("hide")
        .addClass("fadeIn");
    });
  });
})(jQuery);
