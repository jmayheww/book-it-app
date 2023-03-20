class Api::BookingsController < ApplicationController
  def index
    bookings = Booking.all
    render json: bookings, status: :ok
  end

  def show
    booking = Booking.find(params[:id])
    render json: booking, status: :found
  end
end
