
class VisitsController < ApplicationController
	
  def index
  	user = current_user
  	country = current_user.countries
  	@visit = Visit.find_by(id: params[:id])
  end

end