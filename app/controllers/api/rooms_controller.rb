class Api::RoomsController < ApplicationController
  include ApiResource

  def admin_index
    rooms = Room.all
    render json: rooms, status: :ok
  end

  private

  def model
    Room
  end
end
