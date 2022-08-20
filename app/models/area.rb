# == Schema Information
#
# Table name: areas
#
#  id         :integer          not null, primary key
#  all        :boolean          default(TRUE), not null
#  chubu      :boolean          default(FALSE), not null
#  chugoku    :boolean          default(FALSE), not null
#  hokkaido   :boolean          default(FALSE), not null
#  kanto      :boolean          default(FALSE), not null
#  kinki      :boolean          default(FALSE), not null
#  kyushu     :boolean          default(FALSE), not null
#  okinawa    :boolean          default(FALSE), not null
#  shikoku    :boolean          default(FALSE), not null
#  tohoku     :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Area < ApplicationRecord
  has_many :hotsnacks, through: :hotsnack_areas
  has_many :hotsnack_areas
end
