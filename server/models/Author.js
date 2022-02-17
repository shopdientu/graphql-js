const mongoose = require('mongoose')

module.exports = mongoose.model('authors', new mongoose.Schema({
  name: {
    type: String
  },
  birthDay: {
    type: Number
  }
}))