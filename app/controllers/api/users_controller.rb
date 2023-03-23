class Api::UsersController < ApplicationController
  include ApiResource

  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

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

  def render_record_not_found_response(exception)
    render json: { error: "#{exception.model} not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def model
    User
  end
end
