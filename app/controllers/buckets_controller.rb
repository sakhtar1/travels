class BucketsController < ApplicationController
	before_action :set_bucket, only: [:show, :edit, :update, :destroy]

	def index
		@user = current_user
		#@buckets = Bucket.all
		@bucket = Bucket.new
		@buckets = Bucket.paginate(:page => params[:page], :per_page => 10)
		#respond_to do |format|
	    #  format.html { render :index }
	     # format.json { render json: @buckets, status: 200}
    	#end
	end

	def show
		@bucket = Bucket.find_by(id: params[:id])
		respond_to do |format|
	      format.html { render :show }
	      format.json { render json: @bucket, status: 200}
    	end
		
	end

	def create
		 @bucket = current_user.buckets.build(bucket_params) 
      if @bucket.save
        current_user.buckets << @bucket
		redirect_to buckets_path, notice: 'Successfully created.'
    	
      else
        render buckets_path
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
