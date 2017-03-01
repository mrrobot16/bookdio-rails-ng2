Rails.application.routes.draw do
  root :to => 'static#index'
  resources :books do
    resources :book_transactions
  end 
end
