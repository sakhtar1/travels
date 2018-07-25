class VisitsController < ApplicationController
  before_action :set_visit, only: [:show, :edit, :update, :destroy]
  
  def show
      @country = Country.find_by(id: params[:country_id])

  end 

  def create
      @country = Country.find(params[:country_id])
      @visit = @country.visits.build(visit_params.merge(user_id: current_user.id))
      if @visit.save
        redirect_to country_path(@country)
      else
        render "countries/show", notice: 'Unsuccessful Save'
      end
  end

  def edit

  end

  def update
    @visit.update(visit_params)

    redirect_to country_path(@visit.country)
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