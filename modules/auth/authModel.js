const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String
});
userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  obj.id = this._id;
  delete obj.password;
  delete obj._id;
  delete obj.__v;
  return obj;
};
const User = mongoose.model("User", userSchema);

module.exports = User;
