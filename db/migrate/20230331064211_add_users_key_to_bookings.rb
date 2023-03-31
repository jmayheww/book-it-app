class AddUsersKeyToBookings < ActiveRecord::Migration[6.1]
  def change
    add_reference :bookings, :user, index: true
    add_foreign_key :bookings, :users
  end
end
