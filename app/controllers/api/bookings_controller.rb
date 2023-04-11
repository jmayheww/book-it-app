class Api::BookingsController < ApplicationController
  include ApiResource
  before_action :authenticate_user!
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record_resp
  rescue_from ActiveRecord::RecordNotUnique, with: :render_unique_violation_response
  def create
    new_booking = Booking.create!(booking_params)
    render json: new_booking, status: :created
  end

  def update
    current_user = User.find_by(id: session[:user_id])
    booking = Booking.find(params[:id])

    if current_user.id == booking.user_id
      booking.update!(booking_params)
      render json: booking, status: :ok
    else
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end

  def destroy
    current_user = User.find_by(id: session[:user_id])
    booking = Booking.find(params[:id])

    if current_user.id == booking.user_id
      booking.destroy
      render json: { message: 'Booking deleted' }, status: :ok
    else
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end

  private

  def model
    Booking
  end

  def authenticate_user!
    # if user is not logged in
    return if session[:user_id]

    render json: { error: 'Not authorized' }, status: :unauthorized
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
