const mongoose = require("mongoose");
const Entry = mongoose.model(
  "Entry",
  new mongoose.Schema({
    date: String,
    location: String,
    details: String,
    user: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ]
  })
);
module.exports = Entry;