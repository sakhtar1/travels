class OmniauthCallbacksController < Devise::OmniauthCallbacksController


	def github
		@user = User.from_omniauth(request.env["omniauth.auth"])
		if @user.persisted?
			flash.notice = "Signed in!"
			sign_in_and_redirect @user
		else
			redirect_to new_user_registration_path
		end
		#
	end

	


end
