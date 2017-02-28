# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
book = {
  book_name:"Start With Why",
  author_name:"Simon Sinek",
  isbn_code:"978-1-59184-644-4",
  book_quantity:1,
  published_date:Date.new(2009,10),
  book_category:"Leadership",
  book_issued:1
}

Book.create(book)
