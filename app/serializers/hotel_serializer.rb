class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :country, :image_url, :description, :rating
end
