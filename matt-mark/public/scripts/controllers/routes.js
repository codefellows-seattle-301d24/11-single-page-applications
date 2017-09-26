'use strict';
var app = app || {};

// DONE?: Configure routes for this app with page.js, by registering each URL your app can handle, linked to a single controller function to handle it. Note that these routes do not need to wrapped in an IIFE.
page('/', app.articleController.showHome);
page('/about', app.showAbout);
page('/new', app.Article.insertRecord);
page('/admin', app.adminView.initAdminPage);



// DONE: What function do you call to activate page.js? Fire it off now, to execute. Note that it does not need to be attached to the 'app' object nor wrapped in an IIFE.
page();
