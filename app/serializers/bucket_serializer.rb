class BucketSerializer < ActiveModel::Serializer
  attributes :id, :continent, :country, :city, :description, :user_id
  belongs_to :user

end