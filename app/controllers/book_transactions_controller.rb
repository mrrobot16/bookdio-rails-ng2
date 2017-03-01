class BookTransactionsController < ApplicationController
  before_action :set_book, only: [:create]
  before_action :check_book_quantity, only: [:create]

  def create
    transaction = @book.book_transactions.create
    @book.book_quantity -= 1
    @book.save!
    transaction.save!
  end

  def update
    @book_transaction = BookTransaction.find(params[:id])
    @book_transaction.update(transaction_type: 'returned', transaction_status:false)
  end

  private
  def set_book
    @book = Book.find(params[:book_id])
  end

  def check_book_quantity
    if @book.book_quantity < 1
      render json: {'error': 'Cant create BookTransaction because Book.book_quantity < 1'}
    end
  end
end
