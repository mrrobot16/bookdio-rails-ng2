Rails.application.routes.draw do
  resources :books do
    resources :book_transactions
  end
end
