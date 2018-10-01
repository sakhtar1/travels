class BucketSerializer < ActiveModel::Serializer
  attributes :id, :continent, :country, :city, :description
end