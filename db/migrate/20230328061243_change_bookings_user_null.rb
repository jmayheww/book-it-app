class ChangeBookingsUserNull < ActiveRecord::Migration[6.1]
  def up
    Booking.where(user_id: nil).destroy_all
    change_column :bookings, :user_id, :bigint, null: false
  end

  def down
    change_column :bookings, :user_id, :bigint, null: true
  end
end
