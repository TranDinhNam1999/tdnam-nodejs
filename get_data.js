// const fetch = require('node-fetch');

// (async function() {
//     const res = await fetch('https://vnexpress.net');
//     const text = await res.text();
//     const matches = await text.match(/title="(.*)"/g);
//     console.log(matches);
// })().catch(console.error);
const Parser = require('rss-parser');
const parser = new Parser();

(async() => {

    const feed = await parser.parseURL('https://vnexpress.net/rss/tin-moi-nhat.rss');
    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link);
        console.log('- tom tat: ', item.contentSnippet);
    });

})();