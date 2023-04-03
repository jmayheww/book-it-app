class AddAttrToHotels < ActiveRecord::Migration[6.1]
  def change
    add_column :hotels, :website, :string
    add_column :hotels, :phone, :string
  end
end
