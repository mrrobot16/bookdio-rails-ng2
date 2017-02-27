Rails.application.routes.draw do
  resources :books
    root :to => 'static#index'
end
