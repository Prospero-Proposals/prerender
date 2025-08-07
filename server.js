#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
  followRedirects: true,
  pageLoadTimeout: 100000,
  pageDoneCheckInterval: 5000,
  logRequests: true
});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
