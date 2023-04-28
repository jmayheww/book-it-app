class RoomSerializer < ActiveModel::Serializer
  attributes :id, :room_title, :description, :number_of_guests, :price_per_night, :is_available, :image_url, :hotel,
             :users

  def users
    object.users.map { |user| UserSerializer.new(user).as_json }
  end
end
