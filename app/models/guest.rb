class Guest < ApplicationRecord
  belongs_to :user
  has_many :bookings, dependent: :destroy
  has_many :rooms, through: :bookings, dependent: :destroy
  has_many :hotels, through: :rooms, dependent: :destroy
end
