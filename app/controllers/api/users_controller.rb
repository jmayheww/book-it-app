class Api::UsersController < ApplicationController
  include ApiResource
  before_action :authenticate_user!, only: [:show]

  def create
    new_user = User.create!(user_params)
    session[:user_id] = new_user.id
    render json: new_user, status: :created
  end

  def show
    current_user = User.find_by(id: session[:user_id])
    return render json: { error: 'Not authorized' }, status: :unauthorized unless current_user

    render json: user, status: :found
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end

  def model
    User
  end
end
