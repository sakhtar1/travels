class VisitsController < ApplicationController
  before_action :set_visit, only: [:show, :edit, :update, :destroy]
  
  def show
      user = current_user
      @visit.user_id = user.id
      @country = Country.find_by(id: params[:country_id])
        respond_to do |format|
        format.html { render :show }
        format.json { redirect_to country_path(@country) }
      end
    
  end 

  def create
      @country = Country.find(params[:country_id])
      @visit = @country.visits.build(visit_params)
      
      if @visit.save
       # binding.pry
       redirect_to country_path(@country)       
      else
          render country_path(@country), notice: 'Successful Save'
      end
  end

  def edit
  end

  def update
    @visit.update(visit_params)

    respond_to do |format|
        format.html { render :index }
        format.json { redirect_to country_path(@visit.country), notice: 'Successfully created.'}
      end
    

    
  end

  def visitsorder
    @country = Country.find_by(id: params[:country_id])
    @visit = @country.visits.ordercountries
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