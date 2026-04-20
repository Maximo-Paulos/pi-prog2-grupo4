const product = require('../db/data');
const users = require('../db/data');

const userController = {
    register: function (req, res)  {
        res.render('register');
    },
    login: function (req, res)  {
        res.render('login');
    },
    profile: function (req, res)  {
        res.render('profile', {usuario : users.usuario });
    }
};
module.exports = userController;