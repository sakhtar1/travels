class AddColumnUserToCOuntries < ActiveRecord::Migration[5.2]
  def change
  	  	add_column :countries, :user_id, :integer
  end
end
