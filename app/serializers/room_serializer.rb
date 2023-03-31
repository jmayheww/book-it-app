class RoomSerializer < ActiveModel::Serializer
  attributes :id, :room_title, :description, :max_guests, :price_per_night, :is_available, :image_url
end
