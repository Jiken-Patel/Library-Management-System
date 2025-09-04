const { Book } = require('../models');

// Create a new book
exports.addBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json({ message: 'Book added successfully', book });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all books
exports.getBooks = async (req, res) => {
    try {   
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }   
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);   
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }       
};

// Update a book
exports.updateBook = async (req, res) => {
    try {
    const { id } = req.params;
    const [updated] = await Book.update(req.body, { where: { id } });

    if (!updated) {
      return res.status(404).json({ message: 'Book not found' });
    }

    const updatedBook = await Book.findByPk(id);
    return res.json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

