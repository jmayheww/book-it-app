class AddCreatedByToRooms < ActiveRecord::Migration[6.1]
  def change
    add_column :rooms, :created_by, :integer
  end
end
