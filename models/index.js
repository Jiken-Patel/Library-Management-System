const sequelize = require('../config/db');
const User = require('./user');
const Book = require('./book');
const BorrowRecord = require('./borrowRecord');
const Fine = require('./fine');

// Define associations
User.hasMany(BorrowRecord, { foreignKey: 'userId'});
BorrowRecord.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(BorrowRecord, { foreignKey: 'bookId'});
BorrowRecord.belongsTo(Book, { foreignKey: 'bookId' });

BorrowRecord.hasOne(Fine, { foreignKey: 'borrowId'});
Fine.belongsTo(BorrowRecord, { foreignKey: 'borrowId' });

User.hasMany(Fine, { foreignKey: 'userId'});
Fine.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    sequelize,
    User,
    Book,
    BorrowRecord,
    Fine
};

