Rails.application.routes.draw do
  resources :albums, only: [:index, :show, :create]
  resources :genres, only: [:index, :show]
end
