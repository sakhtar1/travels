class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
    has_many :visits
	has_many :countries, through: :visits


	 #def user_capitalize
	 # 	name.capitalize!
	 #end
end