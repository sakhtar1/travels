class ContinentsController < ApplicationController
	
  def index
  	@continents = Continent.all
  	respond_to do |format|
      format.html { render :index }
      format.json { render json: @continents, status: 200}
    end
  end

     def show
     	@continent = Continent.find_by(id: params[:id])
    end

end
