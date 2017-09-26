'use strict';
var app = app || {};

page('/', () => {
  $('main').hide();
  $('#articles').fadeIn();
});
page('/about', () => {
  $('main').hide();
  $('#about').fadeIn();
});
page('*', () => {
  $('main').hide();
  $('main').append('<h1>No such page, my guy</h1>')
});
page();

// TODO: Configure routes for this app with page.js, by registering each URL your app can handle, linked to a single controller function to handle it. Note that these routes do not need to wrapped in an IIFE.

// TODO: What function do you call to activate page.js? Fire it off now, to execute. Note that it does not need to be attached to the 'app' object nor wrapped in an IIFE.
