class CountrySerializer < ActiveModel::Serializer
  attributes :id, :continent, :name, :city, :description
  has_many :visits
  has_many :users, through: :visits
end
