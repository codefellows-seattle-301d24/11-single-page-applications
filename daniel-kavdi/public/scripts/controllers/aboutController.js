'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  function hideMain(){
    $('main').hide;
    $('#about').show;
    
  }

  module.aboutController = aboutController;
})(app);
