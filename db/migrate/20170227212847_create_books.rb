class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :book_name
      t.string :author_name
      t.string :isbn_code
      t.integer :book_quantity
      t.date :published_date
      t.string :book_category
      t.integer :book_issued
      t.string :book_transaction
      t.date :transaction_date
      t.string :transaction_type

      t.timestamps
    end
  end
end
