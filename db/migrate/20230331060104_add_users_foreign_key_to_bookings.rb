class AddUsersForeignKeyToBookings < ActiveRecord::Migration[6.1]
  def up
    # Add the user_id column without the null: false and foreign_key constraints
    add_reference :bookings, :user, index: true

    # Option 1: Remove the rows with null "user_id" values
    Booking.where(user_id: nil).destroy_all

    # Add the null: false and foreign_key constraints to the user_id column
    change_column_null :bookings, :user_id, false
    add_foreign_key :bookings, :users
  end

  def down
    remove_reference :bookings, :user, foreign_key: true
  end
end
