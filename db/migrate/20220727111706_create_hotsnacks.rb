class CreateHotsnacks < ActiveRecord::Migration[6.1]
  def change
    create_table :hotsnacks do |t|
      t.string :item_uuid, null: false
      t.string :name, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.string :image, null: false
      t.string :ingredient, null: false
      t.integer :like_count, default: 0
      t.integer :dislike_count, default: 0
      t.integer :genre, null: false
      t.integer :store, null: false
      t.integer :country, null: false
      t.integer :status, null: false, default: 0

      t.timestamps
    end
    add_index :hotsnacks, :item_uuid, unique: true
  end
end
