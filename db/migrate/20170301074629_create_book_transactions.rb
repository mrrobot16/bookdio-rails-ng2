class CreateBookTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :book_transactions do |t|
      t.string :transaction_type
      t.boolean :transaction_status, default: true
      t.references :book, foreign_key: true

      t.timestamps
    end
  end
end
