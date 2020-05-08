const { Client } = require("pg");
const client = new Client({
    user: "yujeunvafgnwbm",
    host: "ec2-34-192-30-15.compute-1.amazonaws.com",
    database: "d9b370qs70aghm",
    password: "86074cf0d1e902d170018da36172f46a42f3318e0871b94f0f6d6e931a151faa",
    port: 5432,
    ssl: true
});

module.exports = client