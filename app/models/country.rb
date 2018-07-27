class Country < ActiveRecord::Base
    has_many :visits
	has_many :users, through: :visits


	validates_presence_of :name, :continent, :city

end