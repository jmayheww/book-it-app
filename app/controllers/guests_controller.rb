class GuestsController < ApplicationController
  def index
    guests = Guest.all
    render json: guests, status: :ok
  end
end
