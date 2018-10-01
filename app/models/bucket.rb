class Bucket < ActiveRecord::Base
	belongs_to :user

  #validates_presence_of :country

	  STATUS = {
    :incomplete => 0,
    :complete => 1
  }

  def complete?
    self.status == STATUS[:complete]
  end

  def incomplete?
    self.status == STATUS[:incomplete]
  end
end