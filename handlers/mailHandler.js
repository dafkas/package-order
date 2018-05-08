const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

exports.sendMail = (userData) => {
    const options = {
        auth: {
            api_user: process.env.SENDGRID_USERNAME,
            api_key: process.env.SENDGRID_PASSWORD
        }
    }

    const client = nodemailer.createTransport(sgTransport(options));
    const email = {
        from: 'noreply@fedex-app.com',
        to: userData.email,
        subject: 'Registration mail',
        html: `<p>Hi ${userData.name} thanks for registering the fedex delivery app, see login credentials below: </p><p><b>Username: </b>${userData.username}</p><p><b>Password: </b>${userData.password}</p>`
    };

    client.sendMail(email, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Message sent to: ' + userData.email);
        }
    });
};