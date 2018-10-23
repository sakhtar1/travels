class VisitsController < ApplicationController
 
  
  def show
      #binding.pry
      @visit = Visit.find(params[:id])
      user = current_user
      @visit.user_id = user.id
      @country = Country.find_by(id: params[:country_id])
      respond_to do |format|
        format.html { render :show }
        format.json { redirect_to country_path(@visit.country) }
      end
  end 

  def create
      #@country = Country.find(params[:country_id])
      #@visit = @country.visits.build(visit_params)
      
      #if @visit.save
       # binding.pry
       #respond_to do |format|
       # format.html { render :create }
       #format.json { redirect_to country_path(@visit.country), notice: 'Successfully created.'}
        #end
          
     # else
         # render country_path(@country), notice: 'Successful Save'
      #end
  end

  def edit
    @visit = Visit.find(params[:id])
    #binding.pry
  end

  def update
    #binding.pry
    @visit = Visit.find(params[:id])
    @visit.update(visit_params)
    redirect_to country_path(@visit.country), notice: 'Successfully created.'
    #respond_to do |format|
     #   format.html { render :index }
      #  format.json { redirect_to country_path(@visit.country), notice: 'Successfully created.'}
      #end
    

    
  end

  def visitsorder
    @country = Country.find_by(id: params[:country_id])
    @visit = @country.visits.ordercountries
  end


  def destroy
    @visit = Visit.find(params[:id])
    @visit.destroy
    flash[:notice] = "Visit deleted."
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