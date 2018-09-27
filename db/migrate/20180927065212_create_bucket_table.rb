class CreateBucketTable < ActiveRecord::Migration[5.2]
  def change
    create_table :buckets do |t|
    	 t.string :continent
    	 t.string :country
      	 t.string :city
      	 t.text :description
    end
  end
end
