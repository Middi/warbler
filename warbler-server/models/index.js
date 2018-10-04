require("dotenv").load();
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.DB, {
  keepAlive: true
});

module.exports.User = require("./user");
module.exports.Message = require("./message");
