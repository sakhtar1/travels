class Visit < ActiveRecord::Base
    belongs_to :user
    belongs_to :country
    
   	validates_presence_of :visit_places
	scope :ordercountries, -> { order('visit_date DESC')}


end