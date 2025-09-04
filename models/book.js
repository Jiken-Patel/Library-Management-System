const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');  

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalCopies: {
        type: DataTypes.INTEGER,
        allowNull: false    
    },
    availableCopies: {
        type: DataTypes.INTEGER,
        allowNull: false    
    }
});

module.exports = Book;