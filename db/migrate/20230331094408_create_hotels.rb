class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :address
      t.text :description
      t.string :image_url
      t.integer :rating
      t.timestamps
    end
  end
end
