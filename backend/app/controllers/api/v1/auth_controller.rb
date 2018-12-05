class Api::V1::AuthController < ApplicationController

  skip_before_action :check_authentication, only: [:create]
    def create

      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password])
# defining your token here
        exp = Time.now.to_i + 24 * 3600
        render json: {
          user: user,
          token: encode_token({
            user_id: user.id,
            exp: exp
            })
        }
      else
        render json: {
          error: "Username or password are incorrect"
        }
      end
    end
end

# exp = Time.now.to_i + 4 * 3600
# exp_payload = { data: 'data', exp: exp }
