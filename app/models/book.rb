class Book < ApplicationRecord
  validates :book_name, presence: true
  validates :author_name, presence: true
  validates :isbn_code, presence: true
  validates :book_quantity, presence: true
  validates :published_date, presence: true
  validates :book_category, presence: true
  has_many :book_transactions, dependent: :destroy
  after_initialize :set_book_issued, :if => :new_record?

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

  private
  def set_book_issued
    self.book_issued = 0;
  end
end
