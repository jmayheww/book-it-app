class GuestSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone_number, :address, :city, :state, :country, :age, :gender,
             :nationality, :passport_number, :date_of_birth
end
