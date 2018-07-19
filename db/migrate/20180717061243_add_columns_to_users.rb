class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
  	add_column :users, :created_at, :datetime, default: false
  	add_column :users, :updated_at, :datetime, default: false
  end
end
