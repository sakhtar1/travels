class ApplicationController < ActionController::Base
	before_action :current_user
  	#before_action :user_authenticated, except: [:new, :create, :home]
  	before_action :authenticate_user!
end
