class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates :check_in, :check_out, :number_of_guests, :user_id, :room_id, presence: true
  validates :number_of_guests, numericality: { greater_than: 0 }
  validates_uniqueness_of :room_id, uniqueness: { scope: %i[check_in check_out] }

  validate :does_not_overlap
  validate :guests_within_limit
  validate :check_out_is_after_check_in

  private

  def check_out_is_after_check_in
    errors.add(:check_out, 'must be after check-in date') if check_in && check_out && check_out <= check_in
  end

  def does_not_overlap
    overlapping_bookings = Booking.where(room_id: room_id)
                                  .where.not(id: id)
                                  .where('check_in < ? AND check_out > ?', check_out, check_in)

    return unless overlapping_bookings.exists?

    errors.add(:base, 'Booking overlaps with existing booking')
  end

  def guests_within_limit
    return unless number_of_guests.present? && room.present?
    return unless number_of_guests > room.number_of_guests

    errors.add(:number_of_guests, "exceeds the room's guest limit")
  end
end
