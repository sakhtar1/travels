class CountrySerializer < ActiveModel::Serializer
  attributes :id, :continent, :name, :city, :description, :user_id, :visits
  has_many :visits
  
end
