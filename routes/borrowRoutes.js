const express = require('express');
const { borrowBook, returnBook , getAllBorrowRecords } = require('../controller/borrowController');
const  authMiddleware  = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, borrowBook);
router.post('/return',authMiddleware, returnBook);

router.get('/records', authMiddleware, getAllBorrowRecords);

module.exports = router;