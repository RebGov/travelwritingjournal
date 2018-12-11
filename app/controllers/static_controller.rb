# require 'rails/application_controller'

class StaticController < Rails::ApplicationController
  skip_before_action :check_authentication
  def index
    render file: Rails.root.join('public', 'build',  'index.html')
  end
end
