class AddColumnsToCountries < ActiveRecord::Migration[5.2]
  def change
  	add_column :countries, :created_at, :datetime, default: false
  	add_column :countries, :updated_at, :datetime, default: false
  end
end
