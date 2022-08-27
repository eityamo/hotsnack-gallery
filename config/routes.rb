Rails.application.routes.draw do
  root 'home#gallery'

  namespace :api do
    namespace :v1 do
      get 'random', to: 'hotsnacks#random'
      get 'hotsnacks', to: 'hotsnacks#index'
      get 'hotsnack/:item_uuid', to: 'hotsnacks#show'
      put 'hotsnack/:item_uuid/like', to: 'likes#create'
      put 'hotsnack/:item_uuid/dislike', to: 'dislikes#create'
    end
  end

  get '*path', to: 'home#gallery'
end
