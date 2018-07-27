class CountriesController < ApplicationController
  before_action :set_country, only: [:show, :edit, :update, :destroy]

  def index   
    @user = current_user
    @countries = Country.all 
  end

  def show
    @visit = @country.visits.build
  end

  def new
      @country = Country.new 
  end

  def create
    @country = current_user.countries.build(country_params) 
      if @country.save
        current_user.countries << @country
    
        redirect_to @country, notice: 'Country was successfully created.' 
      else
        render :new, notice: "Country was not successfully saved"
      end  
  end


  def edit
  end

  def update
     @country.update(country_params)
     if @country.save
        redirect_to @country, notice: 'Country was successfully updated.' 
      else
        redirect_to :edit
      end
  end

   def destroy
    @country.destroy
    redirect_to countries_url, notice: 'Country was successfully deleted.'
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