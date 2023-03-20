class ChangeColumnNameRooms < ActiveRecord::Migration[6.1]
  def change
    rename_column :rooms, :room_type, :room_name
  end
end
