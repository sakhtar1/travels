Rails.application.routes.draw do
  devise_for :users, controllers: {omniauth_callbacks: "omniauth_callbacks"}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	resources :countries

 	resources :visits, only: [:show]
 	resources :settings, only: [:index]
 	get '/' => 'countries#index'



end
