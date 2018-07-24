class VisitsController < ApplicationController
  before_action :set_visit, only: [:destroy]
  
    def create
      @country = Country.find(params[:country_id])
      @visit = @country.visits.build(visit_params.merge(user_id: current_user.id))
      if @visit.save
        redirect_to country_path(@country)
      else
        render "countries/show", notice: 'Unsuccessful Save'
      end
   end


  def destroy
    @visit.destroy
    flash[:notice] = "Visit deleted."
    redirect_to country_path(@visit.country)
  end

  private

    def set_visit
      @visit = Visit.find(params[:id])
    end
    def visit_params
      params.require(:visit).permit(
        :visit_date,
        :visit_places
        )
    end
end