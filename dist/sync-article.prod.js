"use strict";var Parser=require("rss-parser"),db=require("./services/db"),Bluebird=require("bluebird"),Article=require("./services/article"),parser=new Parser,VNEPRESS_RSS="https://vnexpress.net/rss/tin-moi-nhat.rss",THANHNIEN_RSS="https://thanhnien.vn/rss/home.rss",rssList=[VNEPRESS_RSS,THANHNIEN_RSS],SYNC_INTERVAL=Number(process.env.SYNC_INTERVAL||6e4);db.sync().then(function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(Bluebird.each(rssList,function(r){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(parser.parseURL(r));case 2:return n=e.sent,e.next=5,regeneratorRuntime.awrap(Bluebird.each(n.items,function(r){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.link){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,regeneratorRuntime.awrap(Article.findOne({where:{link:r.link}}));case 4:if(e.sent){e.next=9;break}return console.log("Add new article: "),e.next=9,regeneratorRuntime.awrap(Article.create({link:r.link,title:r.title,content:r.contentSnippet,publishedAt:new Date(r.pubDate)}));case 9:case"end":return e.stop()}})}));case 5:case"end":return e.stop()}})}));case 2:return e.next=4,regeneratorRuntime.awrap(Bluebird.delay(SYNC_INTERVAL));case 4:e.next=0;break;case 6:case"end":return e.stop()}})}).catch(console.error);