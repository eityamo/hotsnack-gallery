# == Schema Information
#
# Table name: hotsnacks
#
#  id            :integer          not null, primary key
#  country       :string           not null
#  description   :text             not null
#  dislike_count :integer          default(0)
#  genre         :string
#  image         :string           not null
#  ingredient    :string
#  item_uuid     :string           not null
#  like_count    :integer          default(0)
#  name          :string           not null
#  price         :integer          not null
#  status        :boolean          default(TRUE), not null
#  store         :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_hotsnacks_on_item_uuid  (item_uuid) UNIQUE
#
class Hotsnack < ApplicationRecord
  has_many :areas, through: :hotsnack_areas, dependent: :destroy
  has_many :hotsnack_areas, dependent: :destroy

  validates :item_uuid, presence: true, uniqueness: true
  validates :name, presence: true
  validates :price, presence: true
  validates :description, presence: true
  validates :image, presence: true
  validates :store, presence: true
  validates :country, presence: true
  validates :status, presence: true
  validates :like_count, numericality: { greater_than_or_equal_to: 0 }
  validates :dislike_count, numericality: { greater_than_or_equal_to: 0 }
end
