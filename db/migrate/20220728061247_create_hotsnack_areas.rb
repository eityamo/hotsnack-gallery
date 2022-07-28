class CreateHotsnackAreas < ActiveRecord::Migration[6.1]
  def change
    create_table :hotsnack_areas do |t|
      t.references :hotsnack, null: false, foreign_key: true, index: true
      t.references :area, null: false, foreign_key: true, index: true

      t.timestamps
    end
  end
end
