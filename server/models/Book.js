const mongoose = require('mongoose')

module.exports = mongoose.model('books', new mongoose.Schema({
  name: {
    type: String
  },
  genre: {
    type: String
  },
  authorId: {
    type: String
  }
}))