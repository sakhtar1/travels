class Visit < ActiveRecord::Base
    belongs_to :users
	belongs_to :countries

	scope :created, -> { created.where("created_at: true") }
	

	def self.created
		where(created_at: 'true')
	end

#order all visit.countries by timing in desc
	def self.created_order
		Visit.created.order('created_at.time desc')
	end
end