var $ = require('jquery');

module.exports = {
  template: require('./template.html'),

  ready: function() {

  },

  data: {

  },

  methods: {
    startDrag: function(e) {
      var container = $('#main-container');
      var startX = e.clientX;
      var startWidth = container.width();
      $('#frame-blocker').css({
        display: 'block'
      });
      $(window).on('mousemove', function(e) {
        container.css({
          width: startWidth + (e.clientX - startX)
        });
        window.ace.resize();
      }).on('mouseup', function(e) {
        $(window).off('mouseup').off('mousemove');
        $('#frame-blocker').css({
          display: 'none'
        });
      });
    }
  }
};
