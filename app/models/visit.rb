class Visit < ActiveRecord::Base
    belongs_to :user, required: false
    belongs_to :country, required: false

    validates_presence_of :visit_date, :visit_places
	scope :ordercountries, -> { order('visit_date DESC')}


end