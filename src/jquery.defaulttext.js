(function($) {
  $.fn.defaultText = function() {
    return this.focus(function() {
      if($(this).val() == $(this).attr('title')) {
        $(this).removeClass("defaultText");
        $(this).val("");
      }
    }).blur(function() {
      if ($.trim($(this).val()) == "") {
        $(this).addClass("defaultText");
        $(this).val($(this).attr('title'));
      }
    }).blur().each(function() {
      var $field = $(this);
      $(this.form).submit(function(e) {
        $field.focus();
      });
    });
  };
})(jQuery);
