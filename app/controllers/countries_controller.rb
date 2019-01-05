class CountriesController < ApplicationController
  before_action :set_country, only: [:show, :edit, :update, :destroy]

  def index   
    @user = current_user
    @countries = Country.all 
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @countries, status: 200}
    end
    
  end

  def show
    @country = Country.find_by(id: params[:id])
    @next_country = @country.next
    #binding.pry
    @visit = @country.visits.build
    noEmptyVisits = @visit.delete { |c| c.empty? }
    #@visit.save
     
    #binding.pry
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @country, status: 200}
    end
    #binding.pry
  end

  def continent_order
    countries = current_user.countries
    @country = countries.continent_order
  end

  def new
      @country = Country.new 
      #binding.pry
  end

  def create
    @country = current_user.countries.build(country_params) 
      if @country.save
        #current_user.countries << @country
    binding.pry
        redirect_to @country, notice: 'Country was successfully created.' 
      else
        render :new
      end  
  end


  def edit
  end

  def update
    #binding.pry
     @country.update(country_params)
     if @country.save
        redirect_to @country, notice: 'Country was successfully updated.' 
      else
        render :edit
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
        :user_id,
        :continent,
        :name,
        :city,
        :description
        )
    end


end