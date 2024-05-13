$(document).ready(function () {
    (function ($) {
      $.fn.timeline = function () {
        var selectors = {
          id: $(this),
          item: $(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        var itemLength = selectors.item.length;
        $(window).scroll(function () {
          var max, min;
          var pos = $(this).scrollTop();
          selectors.item.each(function (i) {
            min = $(this).offset().top;
            max = $(this).height() + $(this).offset().top;
            var that = $(this);
            // 
            if (pos + $(window).height() / 3.5 >= min) {
              selectors.item.removeClass(selectors.activeClass);
              $(this).addClass(selectors.activeClass);
            }
          });
        });
      };
    })(jQuery);
  
    $("#program-section").timeline();
  });
  