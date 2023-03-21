class Api::GuestsController < ApplicationController
  include ApiResource

  def show_user_guest
    user = User.find(params[:user_id])
    guest = user.guest
    render json: guest, status: :found
  end

  private

  def model
    Guest
  end
end
