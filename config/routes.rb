Rails.application.routes.draw do
  root 'home#gallery'

  namespace :api do
    namespace :v1 do
      get 'random', to: 'hotsnack#random'
      get 'hotsnack/:item_uuid', to: 'hotsnack#show'
    end
  end

  get '*path', to: 'home#gallery'
end
