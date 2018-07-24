
class VisitsController < ApplicationController
  before_action :set_visit, only: [:show, :edit, :update, :destroy]
	
    def create
      @country = Country.find(params[:country_id])
      @visit = @country.visits.build(visit_params.merge(user_id: current_user.id))
      if @visit.save
        redirect_to country_path(@country)
      else
        render "countries/show", notice: 'Unsuccessful Save'
      end
   end

  def show
      @country = Country.find_by(id: params[:country_id])
      @visit = @country.visits.build
      #@visit = current_user.visits.build
  end



  def edit    
  end

  def update
  	@visit.update(visit_params)

  	redirect_to country_path(@country)
  end

  def destroy
    @country = Country.find(params[:country_id])
    @visits = @country.visits.find(params[:id])
  	@visits.destroy
    flash[:notice] = "Visit deleted."
  	redirect_to country_path(@country)
  end

  private

  def set_visit
      @visit = Visit.find_by(id: params[:id])
    end
  	def visit_params
  		params.require(:visit).permit(
  			:visit_date,
  			:visit_places
  			)
  	end
end