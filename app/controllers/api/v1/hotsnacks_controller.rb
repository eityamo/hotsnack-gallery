class Api::V1::HotsnacksController < ApplicationController
  def random
    fetch_hotsnack = Hotsnack.offset(rand(Hotsnack.count)).limit(1).first.item_uuid
    render json: fetch_hotsnack
  end

  def show
    hotsnack = Hotsnack.find_by(item_uuid: params[:item_uuid])
    render json: hotsnack
  end
end
