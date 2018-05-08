const mailHandler = require('../handlers/mailHandler');

exports.packageOrderPage = (req, res) => {
    res.render('index');
};

exports.createAccount = (req, res) => {
    const username = Math.floor(1000000 + Math.random() * 9000000000);
    const userpassword = Math.random().toString(36).substr(2, 9)

    const userData = {
        username: username,
        password: userpassword,
        name: req.body.name,
        email: req.body.email,
        adress: req.body.adress,
        phone: req.body.phone
    }



    mailHandler.sendMail(userData);
    res.redirect('/success');
}   