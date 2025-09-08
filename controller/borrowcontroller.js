const { BorrowRecord, User, Book, Fine } = require('../models');
const { calculateFine } = require('../utils/fineCalculator');

// Borrow a Book
exports.borrowBook = async (req, res) => {
  try {
    const { bookId, dueDate } = req.body;
    const book = await Book.findByPk(bookId);

    if (!book || book.availableCopies < 1) {
      return res.status(400).json({ message: 'Book not available' });
    }

    book.availableCopies -= 1;
    await book.save();

    const borrow = await BorrowRecord.create({
      userId: req.user.id,
      bookId,
      borrowDate: new Date(),
      dueDate,
      status: "borrowed"
    });

    res.json({ message: 'Book borrowed successfully', borrow });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { borrowId } = req.body;

    const borrow = await BorrowRecord.findByPk(borrowId, { include: Book });

    if (!borrow) {
      return res.status(400).json({ message: 'Borrow record not found' });
    }

    if (borrow.returnDate) {
      return res.status(400).json({ message: 'Book has already been returned' });
    }

    // Update borrow record
    borrow.returnDate = new Date();
    borrow.status = 'returned';
    await borrow.save();

    // Update book's available copies
    if (borrow.Book) {
      borrow.Book.availableCopies += 1;
      await borrow.Book.save();
    }

    // Calculate fine
    const fineAmount = calculateFine(borrow.dueDate, borrow.returnDate);
    if (fineAmount > 0) {
      await Fine.create({
        userId: borrow.userId,
        borrowId: borrow.id,
        fineAmount,
      });
    }

    res.json({ message: 'Book returned successfully', fine: fineAmount });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};




// Get all borrow records (with user, book, fine details)
exports.getAllBorrowRecords = async (req, res) => {
  try {
    // Optional: restrict to admins
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    const records = await BorrowRecord.findAll({
      include: [
        { model: User, attributes: ['id', 'name', 'email'] },
        { model: Book, attributes: ['id', 'title', 'author'] },
        { model: Fine, attributes: ['id', 'fineamount', 'paidstatus'] }

      ],
      order: [['borrowDate', 'DESC']]
    });

    res.json({ message: 'Borrow records fetched successfully', records });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
