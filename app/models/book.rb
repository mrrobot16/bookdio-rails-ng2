class Book < ApplicationRecord
  has_many :book_transactions

  def update_book_qty(id)
    # p "update_book_quantity(id)"
    # p id
    p '1 in Book'
    @book = Book.find(id)
    @book.book_quantity -= 1
    @book.book_issued +=1
    @book.save!
    p "@book in BookModel update_book_quantity(id)"
    p @book
  end

  def update_book_issued(id)
    # p "update_book_issued(id)"
    # p id
    p '2 in Book'
    @book = Book.find(id)
    @book.book_quantity += 1
    @book.book_issued -=1
    @book.save!
    p "@book in BookModel update_book_issued(id)"
    p @book
  end

end
