class AddColumnToVisits < ActiveRecord::Migration[5.2]
  def change
  	add_column :visits, :user_id, :integer, default: 1
  end
end
