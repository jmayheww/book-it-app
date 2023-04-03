class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :phone_number, :address, :city, :state, :country, :passport_number,
             :date_of_birth, :avatar_url
end
