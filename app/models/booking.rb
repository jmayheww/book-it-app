class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates :check_in, :check_out, :number_of_guests, :user_id, :room_id, presence: true
  validates :number_of_guests, numericality: { greater_than: 0 }

  validate :does_not_overlap
  validate :guests_within_limit
  validate :check_out_is_after_check_in
  validate :booking_date_in_past

  def self.by_number_of_guests(params)
    bookings = all.where('number_of_guests > ?', params)

    bookings.map { |booking| booking.room.hotel }.uniq
  end

  private

  def booking_date_in_past
    errors.add(:base, 'Room cannot be booked for dates that have already passed') if check_in && check_in < Date.today
  end

  def check_out_is_after_check_in
    errors.add(:check_out, 'must be after check-in date') if check_in && check_out && check_out <= check_in
  end

  def does_not_overlap
    overlapping_bookings = Booking.where(room_id: room_id)
                                  .where.not(id: id)
                                  .where('check_in <= ? AND check_out >= ?', check_out, check_in)

    return unless overlapping_bookings.exists?

    errors.add(:base, 'Booking overlaps with existing booking')
  end

  def guests_within_limit
    return unless number_of_guests.present? && room.present?
    return unless number_of_guests > room.number_of_guests

    errors.add(:number_of_guests, "exceeds the room's guest limit")
  end
end
