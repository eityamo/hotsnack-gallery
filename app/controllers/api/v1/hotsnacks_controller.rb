class Api::V1::HotsnacksController < ApplicationController
  def random
    fetch_hotsnack = Hotsnack.offset(rand(Hotsnack.count)).limit(1).first.item_uuid
    render json: fetch_hotsnack
  end

  def show
    hotsnack = Hotsnack.find_by(item_uuid: params[:item_uuid])
    render json: hotsnack
  end

  def update
    hotsnack = Hotsnack.find_by(item_uuid: params[:item_uuid])
    hotsnack.update(hotsnack_params)
    render json: hotsnack
  end

  private

  def hotsnack_params
    params.require(:hotsnack).permit(:like_count, :dislike_count)
  end
end
