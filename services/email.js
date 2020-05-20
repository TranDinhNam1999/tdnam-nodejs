const nodemailer = require('nodemailer');

async function send(to, subject, content) {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USERNAME || 'tdnamhcmus@gmail.com',
            pass: process.env.EMAIL_PASSWORD || 'anh01639966609',
        }
    });

    return transporter.sendMail({
        from: process.env.EMAIL_FORM || 'tdnamhcmus@gmail.com',
        to,
        subject,
        text: content,
    }).then(console.log).catch(console.error);

}

module.exports = { send };