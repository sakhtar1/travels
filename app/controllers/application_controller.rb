class ApplicationController < ActionController::Base
	before_action :current_user
  	#before_action :user_authenticated, except: [:new, :create, :home]
  	before_action :authenticate_user!

  	def new_session_path(scope)
    	new_user_session_path
  	end
end
