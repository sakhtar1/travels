class Visit < ActiveRecord::Base
    belongs_to :user
    belongs_to :country
    
   
	scope :ordercountries, -> { order('visit_date DESC')}


end