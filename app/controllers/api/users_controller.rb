class Api::UsersController < ApplicationController
  include ApiResource

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end

  def model
    User
  end
end
