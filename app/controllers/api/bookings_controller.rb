class Api::BookingsController < ApplicationController
  include ApiResource

  private

  def model
    Booking
  end
end
