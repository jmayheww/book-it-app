class AddRefToGuest < ActiveRecord::Migration[6.1]
  def change
    add_reference :guests, :user, null: false, foreign_key: true
  end
end
