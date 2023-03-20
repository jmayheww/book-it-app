Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :hotels, only: %i[index show]
    resources :bookings, only: %i[index show]
    resources :rooms
    resources :guests, only: %i[index show]
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
