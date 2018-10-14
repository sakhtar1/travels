class CreateBuckets < ActiveRecord::Migration[5.2]
   def change
    create_table :buckets do |t|
    	 t.string :continent
    	 t.string :country
      	 t.string :city
      	 t.text :description
      	 t.integer :status,  :default => 0
      	 t.integer :user_id
    end
  end
end
