const express = require('express');
require('dotenv').config()
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const db = require('./config/db');



const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
