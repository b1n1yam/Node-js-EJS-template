const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessagesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    default: "0"
  },
  size: {
    type: String,
    required: true
  },
  texture: {
    type: String,
    required: true
  },
  quality: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  color: {
    type: [String]
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("messages", MessagesSchema);
