Rails.application.routes.draw do
  namespace :api do
    resources :users

    resources :hotels, only: %i[index show], shallow: true do
      resources :rooms, only: %i[index show]
    end

    resources :bookings
    resources :rooms
    resources :guests

    post '/signup', to: 'users#create'
    post '/login', to: 'session#create'
    delete '/logout', to: 'session#destroy'
    get '/me', to: 'users#show'
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
