class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :type
      t.text :description
      t.integer :capacity
      t.integer :price_per_night
      t.boolean :is_available
      t.string :image_url

      t.timestamps
    end
  end
end
