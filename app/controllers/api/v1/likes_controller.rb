class Api::V1::LikesController < ApplicationController
  before_action :set_hotsnack, only: %w[create]

  def create
    @hotsnack.update(like_count: @hotsnack.like_count + 1)
    render json: @hotsnack
  end

  private

  def set_hotsnack
    @hotsnack = Hotsnack.find_by(item_uuid: params[:item_uuid])
  end
end
