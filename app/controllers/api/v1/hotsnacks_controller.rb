class Api::V1::HotsnacksController < ApplicationController
  before_action :set_hotsnack, only: %w[show]

  def random
    fetch_hotsnack = Hotsnack.offset(rand(Hotsnack.count)).limit(1).first.item_uuid
    render json: fetch_hotsnack
  end

  def index
    hotsnacks = Hotsnack.all.order(like_count: "DESC")
    render json: hotsnacks
  end

  def show
    render json: @hotsnack
  end

  private

  def set_hotsnack
    @hotsnack = Hotsnack.find_by(item_uuid: params[:item_uuid])
  end
end
