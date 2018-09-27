Rails.application.routes.draw do
  devise_for :users, controllers: {omniauth_callbacks: "omniauth_callbacks"}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	resources :countries do
		collection do 
			get 'continent_order'
		end
		resources :visits do
			collection do
				get 'visitsorder'
			end
		end
	end
 	#resources :settings, only: [:index]
 	get '/' => 'static#home'
 	get'/settings' => 'static#index'
 	resources :continents, only: [:index, :show]
 	resources :buckets



end
