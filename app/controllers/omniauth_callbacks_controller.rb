class OmniauthCallbacksController < Devise::OmniauthCallbacksController



  skip_before_action :authenticate_user!

  #def google_oauth2
   # auth = request.env["omniauth.auth"]
   # user = User.where(provider: auth["provider"], uid: auth["uid"])
    #        .first_or_initialize(email: auth["info"]["email"])
   # user.save!

   # user.remember_me = true
   # sign_in(:user, user)

   # flash.notice = "Signed in!"
   # redirect_to after_sign_in_path_for(user)
  #end

	def google_oauth2
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

	#def twitter
	#	@user = User.from_omniauth(request.env["omniauth.auth"])
	#	if @user.persisted?
	#		flash.notice = "Signed in!"
	#		sign_in_and_redirect @user
	#	else
	#		flash[:notice] = "Try again"
	#		redirect_to new_user_session_path
	#	end
		#
	#end

	#def amazon
		#@user = User.from_omniauth(request.env["omniauth.auth"])
		#if @user.persisted?
		#	flash.notice = "Signed in!"
		#	sign_in_and_redirect @user
		#else
		#	flash[:notice] = "Try again"
		#	redirect_to new_user_session_path
		#end
		
	#end



end
