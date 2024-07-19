const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const { generateToken } = require('../utils/jwtUtils');

const register = async (req, res) => {
  const {  username, password } = req.body;
  const existingUser = await userModel.getUserByEmail(username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const user = await userModel.createUser(username, password);
  const token = generateToken(user.id);
  res.status(201).json({ token });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.getUserByEmail(username);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  // const token = generateToken(user.id);
  res.status(200).json({message:'login succesfully'});
};

module.exports = {
  register,
  login,
};
