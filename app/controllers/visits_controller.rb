
class VisitsController < ApplicationController
	
  def index
  	user = current_user
  	country = current_user.countries
  	@visit = Visit.find_by(id: params[:id])
  	
  end

  def create
  	@country = Country.find(params[:country_id])
  	@visit = @country.visits.build(visit_params)
  	@visit.save
  	redirect_to country_path(@country)
  end

  private
  	def visit_params
  		params.require(:visit).permit(:visit_date)
  	end
end