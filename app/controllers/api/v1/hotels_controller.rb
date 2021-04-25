module Api
  module V1
    class HotelsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        render json: serializer(hotels)
      end

      def show
        render json: serializer(hotel)
      end

      def create
        hotel = Hotel.new(hotel_params)

        if hotel.save
          render json: serializer(hotel)
        else
          render json: errors(hotel), status: 422
        end
      end

      private

      def hotels
        @hotels ||= Hotel.all
      end

      def hotel
        @hotel ||= Hotel.find(params[:id])
      end

      def hotel_params
        params.require(:values).permit(
          :name,
          :stars,
          :description,
          :country,
          :city,
          :street,
          :rooms_count,
          :price,
          :img_link
        )
      end

      def serializer(records)
        HotelSerializer
          .new(records)
          .serialized_json
      end

      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end
