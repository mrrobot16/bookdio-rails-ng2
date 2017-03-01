class Book < ApplicationRecord
  has_many :book_transactions

  def update_book_qty(id)
    @book = Book.find(id)
    @book.book_quantity -= 1
    @book.book_issued +=1
    @book.save!
  end

  def update_book_issued(id)
    @book = Book.find(id)
    @book.book_quantity += 1
    @book.book_issued -=1
    @book.save!
  end  

end
