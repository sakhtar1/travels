class ContinentsController < ApplicationController
	
  def index
  	@continents = Continent.all
  end

     def show
     @continent = Continent.find_by(id: params[:id])
      #user = current_user
      #@visit = Visit.find_by(id: params[:id])
      
    end

end
