class Api::GuestsController < ApplicationController
  include ApiResource

  private

  def model
    Guest
  end
end
