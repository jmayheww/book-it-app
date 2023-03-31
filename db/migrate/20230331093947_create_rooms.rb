class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :room_title
      t.text :description
      t.integer :price_per_night
      t.integer :max_guests
      t.boolean :is_available
      t.string :image_url

      t.timestamps
    end
  end
end
