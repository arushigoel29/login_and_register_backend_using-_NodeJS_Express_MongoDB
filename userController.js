const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// -------------------------------------------------------To Register  the User-----------------------------------------------------------------
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error registering user' });
  }
};

//-------------------------------------------------------- To Login the  User------------------------------------------------------------------
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // -------------------------------------------------Generate JWT Token---------------------------------------------------------------
    const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error logging in' });
  }
};

module.exports = { registerUser, loginUser };
