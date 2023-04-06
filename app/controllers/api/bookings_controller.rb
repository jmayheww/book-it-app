class Api::BookingsController < ApplicationController
  include ApiResource
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record_resp
  rescue_from ActiveRecord::RecordNotUnique, with: :render_unique_violation_response
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

  def render_unique_violation_response
    render json: { error: 'User has already booked this room' }, status: :unprocessable_entity
  end

  def render_invalid_record_resp(exception)
    render json: { error: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
