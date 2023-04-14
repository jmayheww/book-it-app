# User.destroy_all
# Hotel.destroy_all
# Room.destroy_all
# Booking.destroy_all

# # puts 'done seeding...'
# puts 'seeding data...'

# # Create 10 unique users

# 10.times do
#   User.create(
#     email: Faker::Internet.email,
#     password: 'password',
#     password_confirmation: 'password',
#     created_at: Time.now,
#     updated_at: Time.now
#   )

#   User.update(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     phone_number: Faker::PhoneNumber.cell_phone,
#     address: Faker::Address.street_address,
#     city: Faker::Address.city,
#     state: Faker::Address.state,
#     country: Faker::Address.country,
#     age: rand(18..100),
#     nationality: Faker::Nation.nationality,
#     passport_number: Faker::Number.number(digits: 10),
#     date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65)
#   )
# end

# # Create 10 hotels
# hotels = []
# 10.times do
#   hotels << {
#     name: Faker::Company.name,
#     address: Faker::Address.full_address,
#     description: Faker::Lorem.paragraph,
#     rating: rand(1..5),
#     phone: Faker::PhoneNumber.cell_phone,
#     website: Faker::Internet.url,
#     image_url: Faker::LoremFlickr.image(size: '50x60', search_terms: ['hotel']),
#     created_at: Time.now,
#     updated_at: Time.now
#   }
# end
# Hotel.insert_all(hotels)

# # Create 10 rooms for each hotel
# rooms = []
# Hotel.all.each do |hotel|
#   10.times do
#     rooms << {
#       hotel_id: hotel.id,
#       room_title: Faker::Lorem.word,
#       description: Faker::Lorem.paragraph,
#       number_of_guests: rand(1..10),
#       price_per_night: rand(100..1000),
#       is_available: true,
#       image_url: Faker::LoremFlickr.image(size: '50x60', search_terms: ['hotel']),
#       created_at: Time.now,
#       updated_at: Time.now
#     }
#   end
# end
# Room.insert_all(rooms)

# # Create 10 bookings that connect guests and rooms
# bookings = []
# 10.times do
#   room = Room.all.sample
#   user = User.all.sample
#   bookings << {
#     room_id: room.id,
#     user_id: user.id,
#     check_in: Faker::Date.between(from: '2021-09-23', to: '2021-09-30'),
#     check_out: Faker::Date.between(from: '2021-09-30', to: '2021-10-31'),
#     number_of_guests: rand(1..10),
#     created_at: Time.now,
#     updated_at: Time.now

#   }
# end
# Booking.insert_all(bookings)

# puts 'done seeding...'

User.destroy_all
Hotel.destroy_all
Room.destroy_all
Booking.destroy_all

puts 'seeding data...'

# Create 5 unique users

5.times do
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

# Create 6 unique hotels

hotels = [
  {
    name: 'The Ritz Paris',
    address: '15 Place Vendôme, 75001 Paris, France',
    description: 'A historic luxury hotel in the heart of Paris, The Ritz offers exceptional accommodations, fine dining, and a world-renowned spa.',
    rating: 5,
    phone: '+33 1 43 16 30 30',
    website: 'https://www.ritzparis.com/',
    image_url: 'https://ritzparis.twic.pics/prod/hero_chambre_4_0.jpg?twic=v1/cover=940x705/quality=85',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'The Ritz-Carlton Tokyo',
    address: 'Tokyo Midtown 9-7-1 Akasaka, Minato-ku, Tokyo 107-6245, Japan',
    description: 'Located in the heart of Tokyo, The Ritz-Carlton offers stunning city views, luxurious accommodations, and exceptional dining experiences.',
    rating: 5,
    phone: '+81 3-3423-8000',
    website: 'https://www.ritzcarlton.com/en/hotels/japan/tokyo',
    image_url: 'https://imgs.search.brave.com/6I-fNmTxx3SsHmliaIKBSYH8BF0EmNUENny2xveFS-w/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/VkZ3NWxxSGdvYTRG/NW9xQkJna0NnSGFF/SyZwaWQ9QXBp',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'Beverly Wilshire, A Four Seasons Hotel',
    address: '9500 Wilshire Blvd, Beverly Hills, CA 90212, USA',
    description: 'A legendary luxury hotel in Beverly Hills, the Beverly Wilshire offers a perfect blend of historic charm and modern amenities.',
    rating: 5,
    phone: '(310) 275-5200',
    website: 'https://www.fourseasons.com/beverlywilshire/',
    image_url: 'https://www.fourseasons.com/alt/img-opt/~80.930.0,0000-261,9943-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BEV/BEV_1768_original.jpg',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'Burj Al Arab Jumeirah',
    address: 'Jumeirah Street, Umm Suqeim, Dubai, United Arab Emirates',
    description: 'A symbol of modern Dubai, the Burj Al Arab Jumeirah offers ultra-luxurious accommodations, innovative dining experiences, and an iconic sail-shaped structure.',
    rating: 5,
    phone: '+971 4 301 7777',
    website: 'https://www.jumeirah.com/en/stay/dubai/burj-al-arab-jumeirah',
    image_url: 'https://imgs.search.brave.com/JwTSxaE1FTqgpL3BG4KzDD7mRQyUuLAw4hGT4FtE12A/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/Tzc0RE1QSWpZbF9w/N01xdkxPUkN3SGFG/aiZwaWQ9QXBp',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'Mandarin Oriental, Bangkok',
    address: '48 Oriental Avenue, Bang Rak, Bangkok 10500, Thailand',
    description: 'A riverside oasis in the heart of Bangkok, the Mandarin Oriental offers an elegant blend of luxury and Thai culture, along with world-class dining and a renowned spa.',
    rating: 5,
    phone: '+66 (0) 2 659 9000',
    website: 'https://www.mandarinoriental.com/bangkok/chao-phraya-river/luxury-hotel',
    image_url: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/bangkok-16-hotel-the-authors-wing-dusk-01?wid=1280&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'The Gritti Palace, A Luxury Collection Hotel',
    address: 'Campo Santa Maria del Giglio, 2467, 30124 Venice, Italy',
    description: 'Located on the Grand Canal, The Gritti Palace is an exceptional luxury hotel in Venice, featuring historic architecture, sumptuous accommodations, and fine dining.',
    rating: 5,
    phone: '+39 041 794611',
    website: 'https://www.marriott.com/en-us/hotels/vcegl-the-gritti-palace-a-luxury-collection-hotel-venice/overview/',
    image_url: 'https://cache.marriott.com/content/dam/marriott-renditions/VCEGL/vcegl-exterior-2640-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*',
    created_at: Time.now,
    updated_at: Time.now
  }
]

Hotel.insert_all(hotels)

# Create 4 unique rooms for each hotel

rooms = [
  # The Ritz Paris
  {
    hotel_id: Hotel.find_by(name: 'The Ritz Paris').id,
    room_title: 'Superior Room',
    description: 'Elegant and refined, our Superior rooms feature a king-size bed or two twin beds, a luxurious marble bathroom, and views of the hotel’s terraces or Rue Cambon.',
    number_of_guests: 4,
    price_per_night: 1000,
    is_available: true,
    image_url: 'https://ritzparis.twic.pics/prod/suite-514-vincent-leroux-1_2x_0.jpg?twic=v1/cover=940x705/quality=85',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'The Ritz Paris').id,
    room_title: 'Deluxe Room',
    description: 'Spacious and luxurious, our Deluxe rooms feature a king-size bed or two twin beds, a separate seating area, and a large marble bathroom with a separate shower and bathtub.',
    number_of_guests: 4,
    price_per_night: 1200,
    is_available: true,
    image_url: 'https://ritzparis.twic.pics/prod/chambre-409-c-vincent-leroux-1.jpg?twic=v1/cover=940x705/quality=85',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'The Ritz Paris').id,
    room_title: 'Deluxe Junior Suite',
    description: 'The elegant Junior Suites feature a spacious bedroom with a king-size bed or two twin beds, a separate living area, and a large marble bathroom with a separate shower and bathtub.',
    number_of_guests: 5,
    price_per_night: 1500,
    is_available: true,
    image_url: 'https://ritzparis.twic.pics/prod/suite-207-vincent-leroux-1_2x.jpg?twic=v1/focus=auto/cover=880x484/quality=85',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'The Ritz Paris').id,
    room_title: 'Prestige Suite',
    description: 'Offering exceptional comfort and elegance, our Prestige Suites feature a spacious bedroom, separate living area, walk-in wardrobe, and a luxurious marble bathroom.',
    number_of_guests: 6,
    price_per_night: 2000,
    is_available: true,
    image_url: 'https://ritzparis.twic.pics/prod/suite-215-vincent-leroux-2_2x.jpg?twic=v1/cover=940x705/quality=85',
    created_at: Time.now,
    updated_at: Time.now
  },
  # The Ritz-Carlton Tokyo
  {
    hotel_id: Hotel.find_by(name: 'The Ritz-Carlton Tokyo').id,
    room_title: 'Deluxe Room',
    description: 'Elegant and spacious, our Deluxe rooms feature a king-size bed or two twin beds, a seating area, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 2,
    price_per_night: 600,
    is_available: true,
    image_url: 'https://s7d2.scene7.com/is/image/ritzcarlton/tyorz-king-deluxe-50253207?$MedViewport100pct$',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'The Ritz-Carlton Tokyo').id,
    room_title: 'Club Deluxe Room',
    description: 'Featuring access to the Ritz-Carlton Club Lounge, the Club Deluxe Room offers a king-size bed or two twin beds, a seating area, and a marble bathroom with a separate shower and bathtub.',
    number_of_guests: 4,
    price_per_night: 800,
    is_available: true,
    image_url: 'https://s7d2.scene7.com/is/image/ritzcarlton/RCTOKYO_00460?$MedViewport100pct$',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'The Ritz-Carlton Tokyo').id,
    room_title: 'Executive Suite',
    description: 'Spacious and refined, the Executive Suite features a separate living room, a king-size bed, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 4,
    price_per_night: 1000,
    is_available: true,
    image_url: 'https://s7d2.scene7.com/is/image/ritzcarlton/RCTOKYO_00452?$MedViewport100pct$',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'The Ritz-Carlton Tokyo').id,
    room_title: 'Millenia Suite',
    description: 'Offering panoramic city views, the Millenia Suite features a spacious living room, a separate dining area, a king-size bed, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 6,
    price_per_night: 1200,
    is_available: true,
    image_url: 'https://s7d2.scene7.com/is/image/ritzcarlton/RCTOKYO_00449?$MedViewport100pct$',
    created_at: Time.now,
    updated_at: Time.now
  },
  # Beverly Wilshire, A Four Seasons Hotel
  {
    hotel_id: Hotel.find_by(name: 'Beverly Wilshire, A Four Seasons Hotel').id,
    room_title: 'Signature Balcony Room',
    description: 'Featuring a private step-out balcony, the Signature Balcony Room offers a king-size bed or two double beds, a seating area, and a luxurious marble bathroom.',
    number_of_guests: 2,
    price_per_night: 600,
    is_available: true,
    image_url: 'https://www.fourseasons.com/alt/img-opt/~80.930.0,0000-156,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BEV/BEV_1678_original.jpg',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'Beverly Wilshire, A Four Seasons Hotel').id,
    room_title: 'Beverly Suite',
    description: 'Offering a residential feel, the Beverly Suite features a king-size bed, a separate living room, a dining area, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 2,
    price_per_night: 900,
    is_available: true,
    image_url: 'https://www.fourseasons.com/alt/img-opt/~80.690.0,0000-208,8816-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BEV/BEV_1926_original.jpg',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'Beverly Wilshire, A Four Seasons Hotel').id,
    room_title: 'Rodeo Suite',
    description: 'The Rodeo Suite features a king-size bed, a separate living room, a dining area with seating for six, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 4,
    price_per_night: 1200,
    is_available: true,
    image_url: 'https://www.fourseasons.com/alt/img-opt/~80.690.0,0000-156,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BEV/BEV_1915_original.jpg',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'Beverly Wilshire, A Four Seasons Hotel').id,
    room_title: 'Wilshire Presidential Suite',
    description: 'The epitome of luxury, the Wilshire Presidential Suite features a king-size bed, a separate living room, a dining area, a private terrace, and a marble bathroom with a separate shower and bathtub.',
    number_of_guests: 4,
    price_per_night: 1500,
    is_available: true,
    image_url: 'https://www.fourseasons.com/alt/img-opt/~80.690.0,0000-156,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BEV/BEV_1920_original.jpg',
    created_at: Time.now,
    updated_at: Time.now
  },
  # Mandarin Oriental, Bangkok
  {
    hotel_id: Hotel.find_by(name: 'Mandarin Oriental, Bangkok').id,
    room_title: 'Superior Room',
    description: "Overlooking the hotel's lush gardens, the Superior Room offers a king-size bed or two twin beds, a seating area, and a luxurious marble bathroom.",
    number_of_guests: 2,
    price_per_night: 400,
    is_available: true,
    image_url: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/bangkok-19-deluxe-premier-king-room-1?wid=1024&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'Mandarin Oriental, Bangkok').id,
    room_title: 'Deluxe Room',
    description: 'Featuring a private balcony with river views, the Deluxe Room offers a king-size bed or two twin beds, a seating area, and a luxurious marble bathroom.',
    number_of_guests: 2,
    price_per_night: 500,
    is_available: true,
    image_url: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/bangkok-20-room-deluxe-balcony?wid=1024&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'Mandarin Oriental, Bangkok').id,
    room_title: 'Junior Suite',
    description: 'The spacious Junior Suite features a king-size bed or two twin beds, a separate living area, a private balcony with river views, and a luxurious marble bathroom.',
    number_of_guests: 4,
    price_per_night: 600,
    is_available: true,
    image_url: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/bangkok-21-junior-suite-living-area?wid=1024&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'Mandarin Oriental, Bangkok').id,
    room_title: 'Siam Suite',
    description: 'The elegant Siam Suite features a king-size bed, a separate living room, a dining area, a private balcony with river views, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 6,
    price_per_night: 800,
    is_available: true,
    image_url: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/bangkok-19-siam-suite-bedroom-1?wid=1024&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0',
    created_at: Time.now,
    updated_at: Time.now
  },
  # Burj Al Arab Jumeirah
  {
    hotel_id: Hotel.find_by(name: 'Burj Al Arab Jumeirah').id,
    room_title: 'Deluxe One-Bedroom Suite',
    description: 'The Deluxe One-Bedroom Suite features a king-size bed, a separate living area, a private balcony with ocean views, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 2,
    price_per_night: 1500,
    is_available: true,
    image_url: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/new-suites/deluxe-palm-suite.jpg?w=399',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'Burj Al Arab Jumeirah').id,
    room_title: 'Panoramic One-Bedroom Suite',
    description: 'The Panoramic One-Bedroom Suite features a king-size bed, a separate living area, floor-to-ceiling windows with ocean views, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 2,
    price_per_night: 1800,
    is_available: true,
    image_url: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/new-suites/panoramic-suite.jpg?w=399',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'Burj Al Arab Jumeirah').id,
    room_title: 'Club One-Bedroom Suite',
    description: 'The Club One-Bedroom Suite offers a king-size bed, a separate living area, access to the Club Lounge, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 4,
    price_per_night: 2200,
    is_available: true,
    image_url: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/new-suites/club-suite-1907.jpg?w=399',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'Burj Al Arab Jumeirah').id,
    room_title: 'Two-Bedroom Deluxe Suite',
    description: 'The Two-Bedroom Deluxe Suite features two bedrooms with king-size beds, a separate living area, a private balcony with ocean views, and luxurious marble bathrooms with separate showers and bathtubs.',
    number_of_guests: 4,
    price_per_night: 3000,
    is_available: true,
    image_url: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/new-suites/ret_0322suite.jpg?w=399',
    created_at: Time.now,
    updated_at: Time.now
  },
  # The Gritti Palace
  {
    hotel_id: Hotel.find_by(name: 'The Gritti Palace, A Luxury Collection Hotel').id,
    room_title: 'Venetian Room',
    description: 'The Venetian Room offers a king-size bed or two twin beds, a seating area, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 2,
    price_per_night: 800,
    is_available: true,
    image_url: 'https://cache.marriott.com/content/dam/marriott-renditions/VCEGL/vcegl-venetian-room-7358-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'The Gritti Palace, A Luxury Collection Hotel').id,
    room_title: 'Serenissima Room',
    description: 'The Serenissima Room offers a king-size bed or two twin beds, a seating area with views of Venice, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 4,
    price_per_night: 1000,
    is_available: true,
    image_url: 'https://cache.marriott.com/content/dam/marriott-renditions/VCEGL/vcegl-serenissima-suite-2412-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'The Gritti Palace, A Luxury Collection Hotel').id,
    room_title: 'Giglio Prestige Room',
    description: 'The Giglio Prestige Room offers a king-size bed or two twin beds, a seating area with views of the Santa Maria del Giglio square, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 4,
    price_per_night: 1200,
    is_available: true,
    image_url: 'https://cache.marriott.com/content/dam/marriott-renditions/VCEGL/vcegl-king-giglio-1686-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    hotel_id: Hotel.find_by(name: 'The Gritti Palace, A Luxury Collection Hotel').id,
    room_title: 'Landmark Grand Canal Room',
    description: 'The Landmark Grand Canal Room features a king-size bed or two twin beds, a seating area with views of the Grand Canal, and a luxurious marble bathroom with a separate shower and bathtub.',
    number_of_guests: 6,
    price_per_night: 1500,
    is_available: true,
    image_url: 'https://cache.marriott.com/content/dam/marriott-renditions/VCEGL/vcegl-king-landmark-1684-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*',
    created_at: Time.now,
    updated_at: Time.now
  }
]

Room.insert_all(rooms)

# create 10 random bookings

bookings = []
10.times do
  room = Room.all.sample
  user = User.all.sample
  bookings << {
    room_id: room.id,
    user_id: user.id,
    check_in: Faker::Date.between(from: '2023-05-23', to: '2023-06-30'),
    check_out: Faker::Date.between(from: '2023-05-24', to: '2023-07-02'),
    number_of_guests: rand(1..10),
    created_at: Time.now,
    updated_at: Time.now
  }
end
Booking.insert_all(bookings)

puts 'done seeding'
