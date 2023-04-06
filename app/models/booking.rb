class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates_uniqueness_of :user_id, scope: :room_id

  validate :guests_within_limit

  private

  def guests_within_limit
    return unless number_of_guests.present? && room.present?
    return unless number_of_guests > room.number_of_guests

    errors.add(:number_of_guests, "exceeds the room's guest limit")
  end
end
