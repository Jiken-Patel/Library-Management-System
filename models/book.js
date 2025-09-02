const {datatypes} = require('sequelize');
const sequelize = require('../config/db');  

const Book = sequelize.define('Book', {
    title: {
        type: datatypes.STRING,
        allowNull: false
    },
    author: {
        type: datatypes.STRING,
        allowNull: false    
    },
    category: {
        type: datatypes.STRING,
        allowNull: false
    },
    totalcopies: {
        type: datatypes.INTEGER,
        allowNull: false    
    },
    availablecopies: {
        type: datatypes.INTEGER,
        allowNull: false    
    }
});

module.exports = Book;