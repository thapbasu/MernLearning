const mongoose = require("mongoose");

const connectdb = function () {
  mongoose
    .connect("mongodb://127.0.0.1:27017/firstDB")
    .then(() => console.log("Connected!"))
    .catch(() => console.log("not connected!"));
};
module.exports = connectdb;
