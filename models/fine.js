const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');  

const Fine = sequelize.define('Fine', {
    afinemount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
        allowNull: false
    },
    paidstatus: {
        type: DataTypes.ENUM('paid', 'unpaid'),
        defaultValue: 'unpaid',
        allowNull: false
    }
});
module.exports = Fine;