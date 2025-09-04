const { BorrowRecord, Book, Fine } = require('../models');
const calculateFine = require('../utils/fineCalculator');

exports.borrowBook = async (req, res) => {
    try {
    const { bookId , dueDate } = req.body;
    const book = await Book.findByPk(bookId);

    if (!book || book.availableCopies < 1) {
        return res.status(400).json({ message: 'Book not available' });
    }

    book.availableCopies -= 1;
    await book.save();
    const borrow= await BorrowRecord.create({
        userId: req.user.id,
        bookId,
        borrowDate: new Date(),
        dueDate
    });
    res.json({ message: 'Book borrowed successfully', borrow });
}
catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
}
};

exports.returnBook = async (req, res) => {
    try {
    const { borrowid } = req.body  ;
    const borrow = await BorrowRecord.findByPk(borrowid, { include: Book });
    if (!borrow || borrow.returnDate) {
        return res.status(400).json({ message: 'Invalid borrow record' });
    }
    borrow.returnDate = new Date();
    await borrow.save();

    borrow.Book.availableCopies += 1;
    await borrow.Book.save();

    // Calculate fine if returned late
    const fineAmount = calculateFine(borrow.dueDate, borrow.returnDate);
    if (fineAmount > 0) {
        await Fine.create({
            userId: borrow.userId,
            borrowid: borrow.id,
            fineAmount
        });
    }
    res.json({ message: 'Book returned successfully', fine: fineAmount });
}
catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
}   
};
