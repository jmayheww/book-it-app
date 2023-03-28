class ReplaceForeignKeyInBookings < ActiveRecord::Migration[6.1]
  def change
    remove_column :bookings, :guest_id
    add_reference :bookings, :user, index: true, foreign_key: true
  end
end
