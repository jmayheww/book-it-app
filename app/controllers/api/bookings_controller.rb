class Api::BookingsController < ApplicationController
  include ApiResource

  def create
    new_booking = Booking.create!(booking_params)
    render json: new_booking, status: :created
  end

  private

  def model
    Booking
  end

  def booking_params
    params.permit(:user_id, :room_id, :number_of_guests, :check_in, :check_out)
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
