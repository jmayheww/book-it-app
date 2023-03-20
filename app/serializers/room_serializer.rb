class RoomSerializer < ActiveModel::Serializer
  attributes :id, :room_name, :description, :capacity, :price_per_night, :is_available, :image_url
end
