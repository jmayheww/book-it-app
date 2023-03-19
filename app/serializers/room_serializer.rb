class RoomSerializer < ActiveModel::Serializer
  attributes :id, :type, :description, :capacity, :price_per_night, :is_available, :image_url
end
