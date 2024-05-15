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

      var debounce = function (func, wait) {
        var timeout;
        return function () {
          var context = this, args = arguments;
          clearTimeout(timeout);
          timeout = setTimeout(function () {
            func.apply(context, args);
          }, wait);
        };
      };

      var onScroll = function () {
        var pos = $(this).scrollTop();
        selectors.item.each(function (i) {
          var min = $(this).offset().top;
          var max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (pos + $(window).height() / 3.5 >= min && pos < max) {
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      };

      $(window).scroll(debounce(onScroll, 100));
    };
  })(jQuery);

  $("#program-section").timeline();
});
