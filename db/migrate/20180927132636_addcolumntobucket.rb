class Addcolumntobucket < ActiveRecord::Migration[5.2]
  def change
  	add_column :buckets, :user_id, :integer
  end
end
