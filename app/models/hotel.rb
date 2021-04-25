class Hotel < ApplicationRecord
  validates :name, :stars, :description, :country, :city, :street, :rooms_count, :price, :img_link, presence: true
end
