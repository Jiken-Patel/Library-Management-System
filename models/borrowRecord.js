const {datatypes} = require('sequelize');
const sequelize = require('../config/db');  

const BorrowRecord = sequelize.define('BorrowRecord', {
    borrowDate: {
        type: datatypes.DATE,
        allowNull: false,
        defaultValue: datatypes.NOW
    },
    dueDate: {
        type: datatypes.DATE,
        allowNull: false
    },
    returnDate: {
        type: datatypes.DATE,
        allowNull: true
    },
    status: {
        type: datatypes.ENUM('borrowed', 'returned', 'overdue'),
        defaultValue: 'borrowed'
    }
});
module.exports = BorrowRecord;