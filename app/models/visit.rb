class Visit < ActiveRecord::Base
    belongs_to :user, required: false
    belongs_to :country, required: false

    #validates_presence_of :visit_date, :visit_places

	scope :ordercount, -> { order('visit_date DESC') }
	
	


#order all visit.countries by vist date in desc

	def self.ordercount_visit
		self.order('visit_date DESC')
	end

	def visit_country=(id)
		Country.id = self.country_id  
	end


end