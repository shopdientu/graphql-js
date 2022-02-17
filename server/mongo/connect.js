const mongoose = require('mongoose')

module.exports = async ({ uri }) => {
  try {
    await mongoose.connect(uri)
    console.log(`Connect MongoDB`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}