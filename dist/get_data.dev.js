"use strict";

// const fetch = require('node-fetch');
// (async function() {
//     const res = await fetch('https://vnexpress.net');
//     const text = await res.text();
//     const matches = await text.match(/title="(.*)"/g);
//     console.log(matches);
// })().catch(console.error);
var Parser = require('rss-parser');

var parser = new Parser();

(function _callee() {
  var feed;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(parser.parseURL('https://vnexpress.net/rss/tin-moi-nhat.rss'));

        case 2:
          feed = _context.sent;
          console.log(feed.title);
          feed.items.forEach(function (item) {
            console.log(item.title + ':' + item.link);
            console.log('- tom tat: ', item.contentSnippet);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
})();