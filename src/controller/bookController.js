const bookModel = require('../models/bookModel');

const createBook = async (req, res) => {
  const { title, author } = req.body;
  const book = await bookModel.createBook(title, author);
  res.status(201).json(book);
};

const getBooks = async (req, res) => {
  const id = req.params.id;
  const books = await bookModel.getBooks(id);
  res.status(200).json(books);
};

module.exports = {
  createBook,
  getBooks,
};
