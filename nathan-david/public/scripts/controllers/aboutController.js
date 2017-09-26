'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};
  aboutController.init = () => {
    $('main').hide();
    $('#about').fadeIn();
  }
  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:


  module.aboutController = aboutController;
})(app);
