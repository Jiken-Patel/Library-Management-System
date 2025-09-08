const express = require('express');
const { getFines, payFine } = require('../controller/fineController');
const  authMiddleware  = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getFines);
router.post('/pay', authMiddleware, payFine);

module.exports = router;
