class Api::V1::DislikesController < ApplicationController
  before_action :set_hotsnack, only: %w[create]

  def create
    @hotsnack.update(dislike_count: @hotsnack.dislike_count + 1)
    render json: @hotsnack
  end

  private

  def set_hotsnack
    @hotsnack = Hotsnack.find_by(item_uuid: params[:item_uuid])
  end
end
