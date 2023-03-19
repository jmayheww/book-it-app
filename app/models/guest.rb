class Guest < ApplicationRecord
  belongs_to :user
  has_many :bookings
  has_many :rooms, through: :bookings
  has_many :hotels, through: :rooms
end
