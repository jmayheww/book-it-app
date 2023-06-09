class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.string :passport_number
      t.integer :age
      t.date :date_of_birth
      t.string :nationality
      t.string :avatar_url

      t.timestamps
    end
  end
end
