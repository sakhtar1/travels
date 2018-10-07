class Country < ActiveRecord::Base
    has_many :visits
	has_many :users, through: :visits

	scope :continent_order, -> { where(continent: 'North America')}

	validates_presence_of :name, :continent, :city

	def next
		Country.where("id > ?", id).first
	end


end