const userController = {
    register: function (req, res)  {
        res.render('register');
    },
    login: function (req, res)  {
        res.render('login');
    },
    profile: function (req, res)  {
        const userData = require('../db/data').user; 
        res.render('profile', { user: userData });
    }

};

module.exports = userController;