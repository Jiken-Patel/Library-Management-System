const {datatypes} = require('sequelize');
const sequelize = require('../config/db');  

const Fine = sequelize.define('Fine', {
    afinemount: {
        type: datatypes.DECIMAL(10, 2),
        defaultValue: 0,
        allowNull: false
    },
    paidstatus: {
        type: datatypes.ENUM('paid', 'unpaid'),
        defaultValue: 'unpaid',
        allowNull: false
    }
});
module.exports = Fine;