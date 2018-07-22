
class VisitsController < ApplicationController
	
  def index
  	user = current_user
  	country = current_user.countries
  	@visit = Visit.find_by(id: params[:id])
  	
  end

  def create
  	@country = Country.find(params[:country_id])
  	@visit = @country.visits.build(visit_params)
  	if @visit.save
  		redirect_to country_path(@country)
  	else
  		render "countries/show", notice: 'Unsuccessful Save'
  	end
  end

  def update

  	@visit = Visit.find(params[:id])
  	@visit.update(visit_params)

  	redirect_to country_path(@visit.country)
  end

  def destroy

  	@visit = Visit.find(params[:id])
  	@visit.destroy
  	redirect_to country_path(@visit.country)
  end

  private
  	def visit_params
  		params.require(:visit).permit(
  			:visit_date,
  			:visit_places
  			)
  	end
end