class CreateGuests < ActiveRecord::Migration[6.1]
  def change
    create_table :guests do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone_number
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.integer :age
      t.string :gender
      t.string :nationality
      t.string :passport_number
      t.date :date_of_birth

      t.timestamps
    end
  end
end
