const Parser = require('rss-parser');
const db = require('./services/db');
const Bluebird = require('bluebird');
const Article = require('./services/article');
const parser = new Parser();
const { send } = require('./services/email');
const User = require('./services/users');


const VNEPRESS_RSS = 'https://vnexpress.net/rss/tin-moi-nhat.rss';
const THANHNIEN_RSS = 'https://thanhnien.vn/rss/home.rss';
const rssList = [VNEPRESS_RSS, THANHNIEN_RSS];
const SYNC_INTERVAL = Number(process.env.SYNC_INTERVAL || 60000);

db.sync().then(async function() {
    for (;;) {

        await Bluebird.each(rssList, async function(rss) {
            const feed = await parser.parseURL(rss);


            await Bluebird.each(feed.items, async function(item) {
                if (!item.link) {
                    return;
                }
                const found = await Article.findOne({
                    where: {
                        link: item.link,
                    }
                });
                if (!found) {
                    console.log('Add new article: ');
                    await Article.create({
                        link: item.link,
                        title: item.title,
                        content: item.contentSnippet,
                        publishedAt: new Date(item.pubDate),
                    });
                }
            })
        });

        const namemail = await User.findAllUser();

        await Bluebird(namemail.email, async function(e) {
            if (!e) return;

            await Email.send(e.email, 'Tin Tuc Covid-19 Moi', `${process.env.BASE_URL}/news`);
        });

        await Bluebird.delay(SYNC_INTERVAL);
    }

}).catch(console.error);