class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :provider, :uid, :created_at, :updated_at
   	has_many :visits
	has_many :countries, through: :visits
	has_many :buckets
end
