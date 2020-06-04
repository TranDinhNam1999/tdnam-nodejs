"use strict";

var Parser = require('rss-parser');

var db = require('./services/db');

var Bluebird = require('bluebird');

var Article = require('./services/article');

var parser = new Parser();

var _require = require('./services/email'),
    send = _require.send;

var User = require('./services/users');

var VNEPRESS_RSS = 'https://vnexpress.net/rss/tin-moi-nhat.rss';
var THANHNIEN_RSS = 'https://thanhnien.vn/rss/home.rss';
var rssList = [VNEPRESS_RSS, THANHNIEN_RSS];
var SYNC_INTERVAL = Number(process.env.SYNC_INTERVAL || 60000);
db.sync().then(function _callee4() {
  var namemail;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Bluebird.each(rssList, function _callee2(rss) {
            var feed;
            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return regeneratorRuntime.awrap(parser.parseURL(rss));

                  case 2:
                    feed = _context2.sent;
                    _context2.next = 5;
                    return regeneratorRuntime.awrap(Bluebird.each(feed.items, function _callee(item) {
                      var found;
                      return regeneratorRuntime.async(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (item.link) {
                                _context.next = 2;
                                break;
                              }

                              return _context.abrupt("return");

                            case 2:
                              _context.next = 4;
                              return regeneratorRuntime.awrap(Article.findOne({
                                where: {
                                  link: item.link
                                }
                              }));

                            case 4:
                              found = _context.sent;

                              if (found) {
                                _context.next = 9;
                                break;
                              }

                              console.log('Add new article: ');
                              _context.next = 9;
                              return regeneratorRuntime.awrap(Article.create({
                                link: item.link,
                                title: item.title,
                                content: item.contentSnippet,
                                publishedAt: new Date(item.pubDate)
                              }));

                            case 9:
                            case "end":
                              return _context.stop();
                          }
                        }
                      });
                    }));

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          }));

        case 2:
          _context4.next = 4;
          return regeneratorRuntime.awrap(User.findAllUser());

        case 4:
          namemail = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(Bluebird(namemail.email, function _callee3(e) {
            return regeneratorRuntime.async(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (e) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    _context3.next = 4;
                    return regeneratorRuntime.awrap(Email.send(e.email, 'Tin Tuc Covid-19 Moi', "".concat(process.env.BASE_URL, "/news")));

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(Bluebird.delay(SYNC_INTERVAL));

        case 9:
          _context4.next = 0;
          break;

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  });
})["catch"](console.error);