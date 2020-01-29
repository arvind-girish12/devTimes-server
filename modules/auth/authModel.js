const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const { secretKey } = require("../../config/auth-config");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  token: {
    type: String
  }
});
userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  obj.id = this._id;
  delete obj.password;
  delete obj._id;
  delete obj.__v;
  return obj;
};
userSchema.methods.generateJwtToken = async function() {
  const user = this;
  const { username, email } = user;
  const token = await jwt.sign(
    {
      username,
      email
    },
    secretKey,
    { expiresIn: "24h" }
  );
  return token;
};

userSchema.methods.comparePassword = async function(password) {
  const user = this;
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  return isPasswordMatch;
};

userSchema.pre("save", async function(next) {
  const user = this;
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
