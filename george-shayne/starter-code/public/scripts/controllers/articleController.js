'use strict';
var app = app || {};

(function(module) {
  const articleController = {};
  // TODO:DID Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.displayArticles = function() {
    $('#about').hide();
    $('#article').show();
  }
  module.Article.fetchAll(module.articleView.initIndexPage);
  module.articleController = articleController;
})(app);
