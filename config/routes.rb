Rails.application.routes.draw do
  root 'home#gallery'

  namespace :api do
    namespace :v1 do
      get 'random', to: 'hotsnacks#random'
      get 'hotsnack/:item_uuid', to: 'hotsnacks#show'
      put 'hotsnack/:item_uuid/like', to: 'hotsnacks#like'
      put 'hotsnack/:item_uuid/dislike', to: 'hotsnacks#dislike'
    end
  end

  get '*path', to: 'home#gallery'
end
