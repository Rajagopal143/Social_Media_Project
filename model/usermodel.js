const mongoose = require("mongoose");
module.exports = mongoose.model(
  "user",
  {
    name: { type: String },
    email: { type: String },
    dob: { type: Date },
    age: { type: Number },
    city: { type: String },
  },
  "users"
);
