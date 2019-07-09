const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: { type: String, required: true },
  picture: { type: String, required: true },
  clicked: { type: Boolean, default: false }
});

const Book = mongoose.model("Card", cardSchema);

module.exports = Book;
