const users = require('users');

const userController = {
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
    },
    profile: (req, res) => {
        const userData = require('../db/data').user; 
        res.render('profile', { user: userData });
    }

};

module.exports = userController;