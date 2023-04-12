Rails.application.routes.draw do
  namespace :api do
    resources :users, only: %i[show create update destroy]

    resources :hotels, only: %i[index]

    resources :bookings, only: %i[create update destroy]

    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/me', to: 'users#show'
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
