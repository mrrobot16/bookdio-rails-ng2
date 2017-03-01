class BookTransaction < ApplicationRecord
  belongs_to :book
  after_update :update_book_quantity
  after_initialize :set_default, :if => :new_record?


  def update_book_quantity
    @book = Book.find(self.book_id)
    @book.book_quantity += 1
    @book.save
  end

  def set_default
      self.transaction_type = "issued"
      self.transaction_status = true
  end
end
