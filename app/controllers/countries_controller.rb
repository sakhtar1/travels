class CountriesController < ApplicationController
  before_action :set_country, only: [:index, :show, :edit, :update, :destroy]

	def index
    @user = current_user
    countries = Country.all
  end

  def show
    @visit = @country.visits.build
  end

  def new
      @country = Country.new
      
  end

  def create
    @country = Country.new(country_params)
      if @country.save
        redirect_to @country, notice: 'Country was successfully created.' 
      else
        @country = Country.all
     	  render :index, notice: "Country was not successfully saved"
      end
    
  end


  def edit
  end

  def update
     @country.update(country_params)
     if @country.save
        redirect_to @country, notice: 'Visit was successfully updated.' 
      else
        render :edit 
      end
  end

   def destroy
    @country.destroy
    redirect_to countries_url, notice: 'Visit was successfully destroyed.'
   end

  private

    def set_country
      @country = Country.find_by(id: params[:id])
    end
    def country_params
      params.require(:country).permit(
        :continent,
        :country,
        :city,
        :description
        )
    end


end