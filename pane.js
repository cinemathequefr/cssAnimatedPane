/**
 * Pane
 * Dependencies: animate.css (https://github.com/daneden/animate.css), jQuery
 */
var Pane = (function () {
  var constructor = function (elem, options) {
    this.elem = elem;
    this.options = $.extend({
      animClasses: ["fadeInRightBig", "fadeOutLeftBig", "fadeInLeftBig", "fadeOutRightBig"]
    }, options);
    this.isOpen = false;
    this.isAnimationRunning = false;
    this.prevAnimClass = undefined;
    this.animClass = undefined;
    $(elem).addClass("animated").hide();
  };

  function fnOpenClose (type) { // Builder function for the open (type=0) and close (type=1) methods
    var valueIsOpen = (type === 0);
    return function (dir) {
      var self = this;
      if (this.isOpen === valueIsOpen | this.isAnimationRunning === true) return;
      var animClasses = this.options.animClasses;
      this.prevAnimClass = this.animClass;
      this.animClass = (dir === 1 ? animClasses[type] : animClasses[type + 2]);
      $(this.elem).removeClass(this.prevAnimClass);
      $(this.elem).show().addClass(this.animClass);
      this.isOpen = valueIsOpen;
      this.isAnimationRunning = true;
      $(this.elem).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { self.isAnimationRunning = false; });
    };
  }

  constructor.prototype.open = fnOpenClose(0);
  constructor.prototype.close = fnOpenClose(1);
  constructor.prototype.toggle = function (dir) {
    if (this.isOpen === true) {
      this.close(dir);
    } else {
      this.open(dir);
    }
  };

  return constructor;
})();
