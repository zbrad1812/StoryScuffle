Rails.application.routes.draw do
  root 'homes#index'

  get '/stories', to: 'homes#index'
  get '/stories/:id', to: 'homes#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :stories
      resources :comments
    end
  end
end
