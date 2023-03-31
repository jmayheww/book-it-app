class AddRefToRoom < ActiveRecord::Migration[6.1]
  def change
    add_reference :rooms, :hotel, null: true, foreign_key: true
  end
end
