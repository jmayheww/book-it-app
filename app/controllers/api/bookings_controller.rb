class Api::BookingsController < ApplicationController
  include ApiResource
  before_action :set_current_user, only: %i[update destroy]
  before_action :set_booking, only: %i[update destroy]
  before_action :authorize_user, only: %i[update destroy]

  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record_resp
  rescue_from ActiveRecord::RecordNotUnique, with: :render_unique_violation_response

  def create
    new_booking = Booking.create!(booking_params)
    render json: new_booking, status: :created
  end

  def update
    @booking.update!(booking_params)
    render json: @booking, status: :ok
  end

  def destroy
    @booking.destroy
    render json: { message: 'Booking deleted' }, status: :ok
  end

  private

  def model
    Booking
  end

  def booking_params
    params.permit(:user_id, :room_id, :number_of_guests, :check_in, :check_out)
  end

  def set_current_user
    @current_user = User.find_by(id: session[:user_id])
  end

  def set_booking
    @booking = Booking.find(params[:id])
  end

  def authorize_user
    if @current_user.nil? || @booking.nil?
      render json: { error: 'Not authorized' }, status: :unauthorized
      return
    end

    return if @current_user.id == @booking.user_id

    render json: { error: 'Not authorized' }, status: :unauthorized
  end

  def render_unique_violation_response
    render json: { error: 'Room has already been booked for these dates' }, status: :unprocessable_entity
  end

  def render_invalid_record_resp(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
