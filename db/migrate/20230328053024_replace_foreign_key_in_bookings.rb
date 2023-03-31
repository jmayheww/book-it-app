class ReplaceForeignKeyInBookings < ActiveRecord::Migration[6.1]
  def change
    remove_column :bookings, :guest_id, :bigint
  end
end
