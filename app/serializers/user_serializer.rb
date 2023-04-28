class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :phone_number, :address, :city, :state, :country, :passport_number,
             :date_of_birth, :avatar_url, :nationality, :bookings, :rooms

  def bookings
    object.bookings.map do |booking|
      BookingSerializer.new(booking).as_json
    end
  end

  def rooms
    object.rooms.map do |room|
      RoomSerializer.new(room).as_json
    end
  end
end
