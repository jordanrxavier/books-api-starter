const Book = require("../models/book")
const Review = require("../models/review")

Book.hasMany(Review)
Review.belongsTo(Book)

module.exports = { Book, Review }