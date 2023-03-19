class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :address
      t.string :country
      t.string :image_url
      t.text :description
      t.integer :rating

      t.timestamps
    end
  end
end
