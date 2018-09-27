class AddColumnBucket < ActiveRecord::Migration[5.2]
  def change
  	add_column :buckets, :status, :integer, :default => 0
  end
end
