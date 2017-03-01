class BookTransactionsController < ApplicationController
  before_action :set_book, only:[:create]

  def create
    @book_transaction = @book.transactions.create(book_transaction_params)
      if @book_transaction.transaction_type == "issued" && @book.book_quantity < 0 then
        @book.quantity -= 1
        @book_transaction.save!
      elsif @book_transaction.transaction_type == "returned"
        @book.quantity += 1
        @book_transaction.save!
      else
        render json: {error: "No more Books Left"}
    end
  end


  private
  def book_transaction_params
    params.require(:book_transaction).permit(:transaction_type)
  end

  def set_book
    @book = Book.find(params[:id])
  end

end
