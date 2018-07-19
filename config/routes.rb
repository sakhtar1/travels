Rails.application.routes.draw do
  devise_for :users, controllers: {omniauth_callbacks: "omniauth_callbacks"}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	resources :countries do
		get '/countries/:id/visits/:id' => 'visits#show'
	end
 	resources :settings, only: [:index]
 	get '/' => 'continents#index'
 	resources :users, only: [:show]
 	resources :continents, only: [:index, :show]



end
