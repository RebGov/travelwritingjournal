class Api::V1::UsersController < ApplicationController
  skip_before_action :check_authentication, only: [:create]

  def create
    user = User.create(user_params)
    if user.valid?
    exp = Time.now.to_i + 24 * 3600
    render json: {
      user: user,
      token: encode_token({
        user_id: user.id,
        exp: exp
        })
    } else
      render json: {
        error: "Username already taken. Please try a different username."
      }
    end
    # }/user: user serializer.new ?
  end

  def profile
    render json: current_user
  end

  private

  def user_params
    params.permit(:id, :username, :bio, :password, :avatar)
  end
end
