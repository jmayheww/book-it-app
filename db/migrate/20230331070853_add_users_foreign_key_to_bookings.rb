class AddUsersForeignKeyToBookings < ActiveRecord::Migration[6.1]
  def change
    add_reference :bookings, :user, foreign_key: true, index: true
  end
end
