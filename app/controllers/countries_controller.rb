class CountriesController < ApplicationController
  before_action :set_country, only: [:index, :show, :edit, :update, :destroy]

	def index
    @user = current_user
    countries = Country.all  
  end

  def show
    @visit = @country.visits.build
    
    #@visit.user_id = current_user.id
    #@visit.country_id = @country.id
    #binding.pry
  end

  def new
      @country = Country.new 
  end

  def create

    @country = current_user.countries.build(country_params)
    current_user.save
    
      if @country.save
        redirect_to @country, notice: 'Country was successfully created.' 
      else
     	  render :new, notice: "Country was not successfully saved"
      end
    
  end


  def edit
   #binding.pry
  end

  def update
     #binding.pry
     @country.update(country_params)
     if @country.save
        redirect_to @country, notice: 'Country was successfully updated.' 
      else
        redirect_to :edit
      end
  end

   def destroy
    @country.destroy
    redirect_to countries_url, notice: 'Country was successfully destroyed.'
   end

  private

    def set_country
      @country = Country.find_by(id: params[:id])
    end
    def country_params
      params.require(:country).permit(
        :continent,
        :name,
        :city,
        :description
        )
    end


end