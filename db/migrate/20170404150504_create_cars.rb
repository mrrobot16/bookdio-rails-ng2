class CreateCars < ActiveRecord::Migration[5.0]
  def change
    create_table :cars do |t|
      t.string :vin
      t.string :brand
      t.integer :year
      t.string :color

      t.timestamps
    end
  end
end
