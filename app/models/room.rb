class Room < ApplicationRecord
  belongs_to :hotel
  has_many :bookings, dependent: :destroy
  has_many :guests, through: :bookings, dependent: :destroy
end
