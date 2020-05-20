"use strict";

var nodemailer = require('nodemailer'); // tdnamhcmus@gmail.com
// anh01639966609


var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'tdnamhcmus@gmail.com',
    pass: 'anh01639966609'
  }
});
transporter.sendMail({
  from: 'tdnamhcmus@gmail.com',
  to: 'namhandsomefap@gmail.com',
  subject: 'Hello nam',
  text: 'Hello world'
}).then(console.log)["catch"](console.error);