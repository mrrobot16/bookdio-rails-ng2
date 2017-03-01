class BookTransactionsController < ApplicationController
  before_action :set_book, only: [:create, :update]
  before_action :check_book_quantity, only: [:create]
  before_action :check_book_issued, only: [:update]

  def create
    @book_transaction = @book.book_transactions.create
    @book_transaction.save!
    render json: @book_transaction
  end

  def update
    @book_transaction = BookTransaction.find(params[:id])
    if(@book_transaction.transaction_status == false)
      render json: {'error:': "Cant edit a transaction with the status of false"}
    else
      @book_transaction.update(transaction_type: 'returned', transaction_status:false)
      @book_transaction.update_book_quantity
    end
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

  def check_book_issued
    if @book.book_issued < 1
      render json: {'error': 'Cant create Return Book because Book.book_issued < 1'}
    end
  end
end
