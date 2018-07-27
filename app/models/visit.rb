class Visit < ActiveRecord::Base
    belongs_to :user, required: false
    belongs_to :country, required: false


	scope :ordercountries, -> { order('visit_date DESC')}


end