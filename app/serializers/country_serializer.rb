class CountrySerializer < ActiveModel::Serializer
  attributes :id, :continent, :name, :city, :description
end
