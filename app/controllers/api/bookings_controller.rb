class Api::BookingsController < ApplicationController
  include ApiResource
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record_resp
  rescue_from ActiveRecord::RecordNotUnique, with: :render_unique_violation_response
  def create
    new_booking = Booking.create!(booking_params)
    render json: new_booking, status: :created
  end

  def update
    booking = Booking.find(params[:id])
    booking.update!(booking_params)
    render json: booking, status: :ok
  end

  def destroy
    booking = Booking.find(params[:id])
    booking.destroy
    render json: { message: 'Booking deleted' }, status: :ok
  end

  private

  def model
    Booking
  end

  def booking_params
    params.permit(:user_id, :room_id, :number_of_guests, :check_in, :check_out)
  end

  def render_unique_violation_response
    render json: { error: 'Room has already been booked for these dates' }, status: :unprocessable_entity
  end

  def render_invalid_record_resp(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
