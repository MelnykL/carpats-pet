class HotelSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :stars, :description, :country, :city, :street, :rooms_count, :price, :img_link

  def stars
    object.stars.to_i
  end
end
