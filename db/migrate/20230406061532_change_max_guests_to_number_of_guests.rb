class ChangeMaxGuestsToNumberOfGuests < ActiveRecord::Migration[6.1]
  def change
    rename_column :rooms, :max_guests, :number_of_guests
  end
end
