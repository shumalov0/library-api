const express = require('express');
const { createBook, getBooks } = require('../controller/bookController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create',authMiddleware, createBook);
router.get('/book/:id',authMiddleware, getBooks);

module.exports = router;
