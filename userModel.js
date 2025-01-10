const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// -----------------------defining the User Schema--------------------
const userSchema = new mongoose.Schema({
  username: { 
    type: String,
    required: true,
    unique: true
   },
  password: { 
    type: String,
    required: true 
  },

});
//--------------------------------------------------------------

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Compare password
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Export User model
module.exports = mongoose.model('User', userSchema);
