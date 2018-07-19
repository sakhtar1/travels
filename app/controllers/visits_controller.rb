
class VisitsController < ApplicationController
	
  def index
  	@visit = Visit.find_by(id: params[:id])
  end

end