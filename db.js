const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/usercrud";

module.exports = () => {
  return mongoose.connect(uri);
};
