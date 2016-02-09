// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  backdrop = require('bespoke-backdrop'),
  hash = require('bespoke-hash');

// Bespoke.js
var deck = bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  backdrop(),
  hash()
]);

// deck.on('activate', function(event) {
//   switch (event.index) {
//     case 1:
//       console.log('2!');
//   }
// })

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
// require('prism/components/prism-javascript');
