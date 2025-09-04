const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');  

const BorrowRecord = sequelize.define('BorrowRecord', {
    borrowDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('borrowed', 'returned', 'overdue'),
        defaultValue: 'borrowed'
    }
});
module.exports = BorrowRecord;