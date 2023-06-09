class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image_url, :description, :rating, :website, :phone
  has_many :rooms
end
