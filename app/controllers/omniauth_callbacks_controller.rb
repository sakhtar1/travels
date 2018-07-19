class OmniauthCallbacksController < Devise::OmniauthCallbacksController

	def github
		@user = User.from_omniauth(request.env["omniauth.auth"])
		if @user.persisted?
			flash.notice = "Signed in!"
			sign_in_and_redirect @user
		else
			flash[:notice] = "Try again"
			redirect_to new_user_session_path
		end
		#
	end

	def twitter
		@user = User.from_omniauth(request.env["omniauth.auth"])
		if @user.persisted?
			flash.notice = "Signed in!"
			sign_in_and_redirect @user
		else
			flash[:notice] = "Try again"
			redirect_to new_user_session_path
		end
		#
	end

	def amazon
		@user = User.from_omniauth(request.env["omniauth.auth"])
		if @user.persisted?
			flash.notice = "Signed in!"
			sign_in_and_redirect @user
		else
			flash[:notice] = "Try again"
			redirect_to new_user_session_path
		end
		
	end



end
