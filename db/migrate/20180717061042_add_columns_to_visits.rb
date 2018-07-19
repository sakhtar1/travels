class AddColumnsToVisits < ActiveRecord::Migration[5.2]
  def change
  	add_column :visits, :visit_date, :datetime
  	add_column :visits, :created_at, :datetime, default: false
  	add_column :visits, :updated_at, :datetime, default: false
  end
end
