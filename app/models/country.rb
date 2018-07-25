class Country < ActiveRecord::Base
    has_many :visits
	has_many :users, through: :visits
	accepts_nested_attributes_for :visits, :reject_if => :all_blank

	validates_presence_of :name, :continent, :city


	#scope :countvisit, -> { where('visit_places > 0') }

	
	
	

end