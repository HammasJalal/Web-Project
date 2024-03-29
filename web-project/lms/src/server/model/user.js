const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: "This field is required.",
  },
  pass: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  fullName: {
    type: String,
  },
  dob: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  registered: {
    type: Boolean,
  },
});

module.exports = mongoose.model("user", userSchema);
