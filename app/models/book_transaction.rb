class BookTransaction < ApplicationRecord
  belongs_to :book
  after_initialize :set_default, :if => :new_record?

  def set_default
    @book = Book.find(id: self.book_id)
    if @book.book_quantity < 0
      self.transaction_type = "issued"
      self.transaction_status = true
    else
      self.transaction_type = "unavailable"
    end
  end
end
