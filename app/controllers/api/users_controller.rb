class Api::UsersController < ApplicationController
  include ApiResource

  private

  def model
    User
  end
end
