class Api::RoomsController < ApplicationController
  include ApiResource

  private

  def model
    Room
  end
end
