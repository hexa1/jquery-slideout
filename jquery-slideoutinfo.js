// David Rose (david@hexa1.io)

;(function ( $, window, document, undefined ) {
  // Create the defaults once
  var pluginName = "slideOutInfo",
      defaults = {};

  var visible = false;

  // The actual plugin constructor
  function Plugin( element, options ) {
    this.element = element;
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      // Start hidden
      var trigger = $(this.element).children("a");
      $(trigger).css({
          'float': 'left',
          'display': 'inline-block',
          'margin': 'none',
      });
      var hiddenInfo = $(this.element).children("p");
      var content = hiddenInfo.children("span");
      var w = content.outerWidth();
      var h = content.outerHeight();
      hiddenInfo.css({
        'visibility'    :'hidden',
        'width'         :'0px',
        'height'        : h,
        'float'         : 'left',
        'overflow'      : 'hidden',
        'position'      : 'relative',
        'display'       : 'block',
        'margin'        : '0',
        'padding'       : '0',
        'right'         : '0',
        'text-align'    : 'right',
      });
      content.css({
          'overflow'      : 'hidden',
          'float'         : 'right',
          'display'       : 'block',
          'text-align'    : 'left',
      });
      $(this.element).click(function() {
        hiddenInfo.css({'visibility':'visible'});
        var pm = (!visible ? "+": "-");
        $(hiddenInfo).animate({
            width: pm + '=' + w,
        }, 500, function() {
            hiddenInfo.css({'left':'0'});
            visible = !visible;
        });
      });
    },
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );