class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.integer :stars
      t.text :description
      t.string :country
      t.string :city
      t.string :street
      t.integer :rooms_count
      t.integer :price
      t.string :img_link

      t.timestamps
    end
  end
end
