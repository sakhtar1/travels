class Visit < ActiveRecord::Base
    belongs_to :users
	belongs_to :countries

	scope :visit_count, -> { where{ visit_count: 'total'}}

	def self.visit_count
		where(visit_count: 'total')
	end

	def self.visit_date
		Visit.visit_count.order('visit_record desc')
	end
end