# == Schema Information
#
# Table name: areas
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Area < ApplicationRecord
  has_many :hotsnacks, through: :hotsnack_areas
  has_many :hotsnack_areas
end
