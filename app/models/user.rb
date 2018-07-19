class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:github, :twitter, :amazon]
        
    has_many :visits
	has_many :countries, through: :visits

	validates_presence_of :name


	  

	 def self.from_omniauth(auth)
	      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
	
	        user.provider = auth.provider
	        user.uid = auth.uid
	        user.email = auth.info.email
	        user.password = Devise.friendly_token[0,20]
	      end
  	 end

	def name_case
     	name.capitalize
 	end

end