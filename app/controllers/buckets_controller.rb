class BucketsController < ApplicationController
	before_action :set_bucket, only: [:show, :edit, :update, :destroy]

	def index
		@user = current_user
		@buckets = Bucket.all
	end

	def show
	end

	def new
		@bucket = Bucket.new
	end

	def create
		 @bucket = Bucket.create(bucket_params)
      if @bucket.save
        #current_user.buckets << @bucket
    
        redirect_to @bucket, notice: 'Bucket list country was successfully created.' 
      else
        render :new
      end 
	end

	def edit
	end

	 def update
     	@bucket.update(bucket_params)
     if @bucket.save
        redirect_to @bucket, notice: 'Bucket country was successfully updated.' 
      else
        render :edit
      end
  	end

	 def destroy
	    @bucket.destroy
	    redirect_to buckets_url, notice: 'Bucket country was successfully deleted.'
    end


     private

	    def set_bucket
	      @bucket = Bucket.find_by(id: params[:id])
	    end

	    def bucket_params
	      params.require(:bucket).permit(
	        :continent,
	        :country,
	        :city,
	        :description
	        )
	    end


end
