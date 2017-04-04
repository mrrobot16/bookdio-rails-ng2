Rails.application.routes.draw do
  resources :cars
  resources :books do
    resources :book_transactions
  end
end
