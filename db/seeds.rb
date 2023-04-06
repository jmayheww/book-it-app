# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #

User.destroy_all
Hotel.destroy_all
Room.destroy_all
Booking.destroy_all

# puts 'done seeding...'
puts 'seeding data...'

# Create 10 unique users

10.times do
  User.create(
    email: Faker::Internet.email,
    password: 'password',
    password_confirmation: 'password',
    created_at: Time.now,
    updated_at: Time.now
  )

  User.update(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone_number: Faker::PhoneNumber.cell_phone,
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    country: Faker::Address.country,
    age: rand(18..100),
    nationality: Faker::Nation.nationality,
    passport_number: Faker::Number.number(digits: 10),
    date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65)
  )
end

# Create 10 hotels
hotels = []
10.times do
  hotels << {
    name: Faker::Company.name,
    address: Faker::Address.full_address,
    description: Faker::Lorem.paragraph,
    rating: rand(1..5),
    image_url: Faker::LoremFlickr.image(size: '50x60', search_terms: ['hotel']),
    created_at: Time.now,
    updated_at: Time.now
  }
end
Hotel.insert_all(hotels)

# Create 10 rooms for each hotel
rooms = []
Hotel.all.each do |hotel|
  10.times do
    rooms << {
      hotel_id: hotel.id,
      room_title: Faker::Lorem.word,
      description: Faker::Lorem.paragraph,
      number_of_guests: rand(1..10),
      price_per_night: rand(100..1000),
      is_available: true,
      image_url: Faker::LoremFlickr.image(size: '50x60', search_terms: ['hotel']),
      created_at: Time.now,
      updated_at: Time.now
    }
  end
end
Room.insert_all(rooms)

# Create 10 bookings that connect guests and rooms
bookings = []
10.times do
  room = Room.all.sample
  user = User.all.sample
  bookings << {
    room_id: room.id,
    user_id: user.id,
    check_in: Faker::Date.between(from: '2021-09-23', to: '2021-09-30'),
    check_out: Faker::Date.between(from: '2021-09-30', to: '2021-10-31'),
    number_of_guests: rand(1..10),
    created_at: Time.now,
    updated_at: Time.now

  }
end
Booking.insert_all(bookings)

puts 'done seeding...'
