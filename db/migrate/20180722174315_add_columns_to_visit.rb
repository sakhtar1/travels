class AddColumnsToVisit < ActiveRecord::Migration[5.2]
  def change
  		 add_column :visits, :visit_places, :string
  end
end
