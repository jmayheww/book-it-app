class AddRoomRefToBookings < ActiveRecord::Migration[6.1]
  def change
    add_reference :bookings, :room, null: false, foreign_key: true
  end
end
