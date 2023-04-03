class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image_url, :description, :rating
end
