class Api::SessionsController < ApplicationController
  before_action :authorize, only: [:destroy]
  def create
    if params[:email].present? && params[:password].present?
      user = User.find_by(email: params[:email])

      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, include: ['bookings', 'bookings.room', 'bookings.room.hotel'], status: :created
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    else
      render json: { error: 'Email and password are required' }, status: :unprocessable_entity
    end
  end

  def destroy
    session.delete(:user_id)
    head :no_content
  end

  private

  def authorize
    return render json: { error: 'Not authorized' }, status: :unauthorized unless session[:user_id]
  end
end
