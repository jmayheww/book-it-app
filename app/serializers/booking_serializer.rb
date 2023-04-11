class BookingSerializer < ActiveModel::Serializer
  attributes :id, :check_in, :check_out, :number_of_guests

  belongs_to :user
  belongs_to :room
end
