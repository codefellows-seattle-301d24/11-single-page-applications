'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.showAbout = function() {

    $('main section').hide()
    $('#about').show()
  }

  module.aboutController = aboutController;
})(app);
