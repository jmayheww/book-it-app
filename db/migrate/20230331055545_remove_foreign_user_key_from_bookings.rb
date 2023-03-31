class RemoveForeignUserKeyFromBookings < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :bookings, :users
  end
end
