const pool = require('../config/db');

const createBook = async (title, author) => {
  const result = await pool.query(
    'INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *',
    [title, author]
  );
  return result.rows[0];
};

const getBooks = async (userId) => {
  const result = await pool.query('SELECT * FROM books WHERE id = $1', [userId]);
  return result.rows;
};

module.exports = {
  createBook,
  getBooks,
};
