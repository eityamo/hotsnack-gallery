# == Schema Information
#
# Table name: hotsnack_areas
#
#  id          :integer          not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  area_id     :integer          not null
#  hotsnack_id :integer          not null
#
# Indexes
#
#  index_hotsnack_areas_on_area_id      (area_id)
#  index_hotsnack_areas_on_hotsnack_id  (hotsnack_id)
#
# Foreign Keys
#
#  area_id      (area_id => areas.id)
#  hotsnack_id  (hotsnack_id => hotsnacks.id)
#
class HotsnackArea < ApplicationRecord
  belongs_to :hotsnack
  belongs_to :area
end
