class Api::HotelsController < ApplicationController
  def index
    hotels = Hotel.all
    render json: hotels, status: :ok
  end

  def show
    hotel = Hotel.find(params[:id])
    render json: hotel, status: :found
  end
end
