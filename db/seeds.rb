# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do
  Hotel.create(
    name: Faker::Commerce.department,
    description: Faker::Lorem.paragraph(sentence_count: rand(5..10)),
    country: Faker::Address.country,
    city: Faker::Address.city,
    street: Faker::Address.street_address,
    stars: rand(2..5),
    rooms_count: rand(10..100),
    price: rand(10..1000),
    img_link: 'https://picsum.photos/900/600'
  )
end
