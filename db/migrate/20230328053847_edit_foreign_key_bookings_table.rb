class EditForeignKeyBookingsTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :bookings, :user_id, :bigint
  end
end
