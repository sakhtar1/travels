class ApplicationController < ActionController::Base
	 before_action :current_user
  	 before_action :authenticate_user!
  	 include DeviseWhitelist

end
