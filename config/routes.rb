Rails.application.routes.draw do
  root 'home#gallery'

  namespace :api do
    namespace :v1 do
      get 'random', to: 'hotsnacks#random'
      get 'hotsnack/:item_uuid', to: 'hotsnacks#show'
    end
  end

  get '*path', to: 'home#gallery'
end
