class VisitSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :country_id, :visit_places, :visit_date
  belongs_to :user
  belongs_to :country
end
