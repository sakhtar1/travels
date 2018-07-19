class Visit < ActiveRecord::Base
    belongs_to :user
	belongs_to :country

	scope :countvisit, -> { count('visit_date', :distinct => true) }
	
	


#order all visit.countries by timing in desc

	def self.countvisit_order
		Visit.distinct.count('visit_date')
	end

	def visit_country=(id)
		self.country_id = id
	end

end