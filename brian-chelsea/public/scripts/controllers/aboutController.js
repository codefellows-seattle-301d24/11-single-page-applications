'use strict';
var app = app || {};

(function(module) {

  // done: Define a function that hides all main section elements, and then reveals just the #about section:
  function about(){
    $('#articles').hide();
    $('#about').show();
  }
  module.about = about;
})(app);
