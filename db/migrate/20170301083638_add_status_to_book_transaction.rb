class AddStatusToBookTransaction < ActiveRecord::Migration[5.0]
  def change
    add_column :book_transactions, :transaction_status, :boolean
  end
end
