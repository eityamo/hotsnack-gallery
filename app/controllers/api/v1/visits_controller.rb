class Api::V1::VisitsController < ApplicationController
  def random
    fetch_hotsnack = Hotsnack.offset(rand(Hotsnack.count)).limit(1).first.item_uuid
    render json: fetch_hotsnack
  end
end
