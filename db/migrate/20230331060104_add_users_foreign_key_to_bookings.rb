class AddUsersForeignKeyToBookings < ActiveRecord::Migration[6.1]
  def up
    # Add the user_id column without the null: false and foreign_key constraints
    add_reference :bookings, :user, index: true, foreign_key: false

    # Option 1: Remove the rows with null "user_id" values
    Booking.where(user_id: nil).destroy_all

    # Option 2: Update the rows with null "user_id" values to have valid "user_id" values
    # null_user_bookings = Booking.where(user_id: nil)
    # null_user_bookings.each do |booking|
    #   booking.update(user_id: User.pluck(:id).sample)
    # end

    # Add the null: false constraint to the user_id column
    change_column_null :bookings, :user_id, false

    # Add the foreign_key constraint
    add_foreign_key :bookings, :users
  end

  def down
    remove_foreign_key :bookings, :users
    remove_reference :bookings, :user, index: true
  end
end
