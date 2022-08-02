class Api::V1::HotsnacksController < ApplicationController
  def random
    # 2件以上のレコードを取得して、前の取得したレコードと異なるレコードを返す
    fetch_hotsnack = Hotsnack.offset(rand(Hotsnack.count)).limit(1).first.item_uuid
    # fetch_hotsnack = Hotsnack.where.not(item_uuid: params[:item_uuid]).offset(rand(Hotsnack.count - 1)).first.item_uuid
    # fetch_hotsnack = Hotsnack.where.not(item_uuid: params[:item_uuid]).sample.item_uuid
    # hotsnacks = Hotsnack.offset(rand(Hotsnack.count - 1)).limit(2)
    # fetch_hotsnack = hotsnacks.reject { |hotsnack| hotsnack.item_uuid == params[:item_uuid] }.first.item_uuid
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
