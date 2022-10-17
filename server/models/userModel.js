const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    uniqe: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// static signup method
userSchema.statics.signup = async function (email, password) {
  // email and password validation
  if (!email || !password) {
    throw Error('All fields must be compiled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Must provide a valid email address');
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong enough');
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error('This mail is already in use');
  }

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields must be compiled');
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error('Incorrect email');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect password');
  }
  return user;
};
module.exports = mongoose.model('User', userSchema);
