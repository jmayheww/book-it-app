class Api::HotelsController < ApplicationController
  include ApiResource

  private

  def model
    Hotel
  end
end
