class AddHotelRefToRooms < ActiveRecord::Migration[6.1]
  def change
    add_reference :rooms, :hotel, null: false, foreign_key: true
  end
end
