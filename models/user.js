const { datatypes } = require('sequelize');
const sequelize = require('../config/db');
const User = sequelize.define('User', {
    name: {
        type: datatypes.STRING,
        allowNull: false
    },
    email: {
        type: datatypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: datatypes.STRING,
        allowNull: false
    },
    role: {
        type: datatypes.ENUM('admin', 'librarian', 'student'),
        defaultValue: 'student'
    }
});
module.exports = User;