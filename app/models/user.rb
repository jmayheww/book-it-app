class User < ApplicationRecord
  has_secure_password
  has_many :bookings, dependent: :destroy
  has_many :rooms, through: :bookings, dependent: :destroy
  has_many :hotels, through: :rooms, dependent: :destroy

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 8 }, on: :create
end
