"use strict";

var nodemailer = require('nodemailer');

function send(to, subject, content) {
  var transporter;
  return regeneratorRuntime.async(function send$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_USERNAME || 'tdnamhcmus@gmail.com',
              pass: process.env.EMAIL_PASSWORD || 'anh01639966609'
            }
          });
          return _context.abrupt("return", transporter.sendMail({
            from: process.env.EMAIL_FORM || 'tdnamhcmus@gmail.com',
            to: to,
            subject: subject,
            text: content
          }).then(console.log)["catch"](console.error));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  send: send
};