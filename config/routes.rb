Rails.application.routes.draw do
  root 'hotsnacks#gallery'

  namespace :api do
    namespace :v1 do
      get 'random', to: 'visits#random'
    end
  end

  get '*path', to: 'hotsnacks#gallery'
end
