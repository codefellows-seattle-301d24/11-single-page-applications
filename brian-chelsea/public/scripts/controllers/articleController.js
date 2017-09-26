'use strict';
var app = app || {};

(function(module) {
  const articleController = {};
  // done: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  app.Article.fetchAll(app.articleView.initIndexPage);
  function articles(){
    $('#about').hide();
    $('#articles').show();
  }
  module.articleController = articleController;
})(app);
