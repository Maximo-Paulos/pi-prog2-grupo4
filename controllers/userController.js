const users = require('../localData/data');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',   // credenciales por defecto de MAMP
    database: 'data',
});

const userController = {
    register: function (req, res)  {
        res.render('register');
    },
    login: function (req, res)  {
        res.render('login');
    },
    profile: function (req, res)  {
        res.render('profile', { usuario: users.usuario, productos: users.productos });
    },
    create: async function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('register', { errors: errors.array() });
        }

        const { nombre, contrasenia, email } = req.body;

        // Verificamos en la base de datos que el email no esté ya registrado
        const [rows] = await db.query(
            'SELECT id FROM usuarios WHERE email = ?', [email]
        );
        if (rows.length > 0) {
            return res.render('register', {
                errors: [{ msg: 'Ese email ya está registrado' }]
            });
        }

        // Encriptamos la contraseña antes de guardarla (nunca en texto plano)
        const contraseniaHash = bcrypt.hashSync(contrasenia, 10);

        await db.query(
            'INSERT INTO usuarios (email, nombre, contrasenia) VALUES (?, ?, ?)',
            [email, nombre, contraseniaHash]
        );
        res.redirect('/users/login');
    }
};

module.exports = userController;
