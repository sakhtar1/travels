class CountrySerializer < ActiveModel::Serializer
  attributes :id, :continent, :name, :city, :description, :visits
  has_many :visits
  has_many :users, through: :visits
end
