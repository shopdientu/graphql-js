const Book = require('../models/Book')
const Author = require('../models/Author')

const mongoDataMethods = {
  getAllBooks: async (condition = null) => await Book.find(condition),
  getAllAuthors: async () => await Author.find(),
  getBookById: async id => await Book.findById(id),
  getAuthorById: async id => await Author.findById(id),
  createBook: async agrs => {
    const newBook = new Book(agrs)
    return await newBook.save()
  },
  createAuthor: async agrs => {
    const newBook = new Author(agrs)
    return await newBook.save()
  }
}

module.exports = { mongoDataMethods }