class BookTransaction < ApplicationRecord
  belongs_to :book
  after_initialize :set_default, :if => :new_record?

  def update_book_quantity
    p '2 in BookTransaction'
    @book = Book.find(self.book_id)
    @book.update_book_issued(self.book_id)
  end

  def set_default
    p '1 in BookTransaction'
      @book = Book.find(self.book_id)
      self.transaction_type = "issued"
      self.transaction_status = true
      @book.update_book_qty(self.book_id)
  end

end
