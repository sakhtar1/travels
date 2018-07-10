class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
		t.integer :country_id
    end
  end
end
