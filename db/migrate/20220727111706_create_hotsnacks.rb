class CreateHotsnacks < ActiveRecord::Migration[6.1]
  def change
    create_table :hotsnacks do |t|
      t.string :item_uuid, null: false
      t.string :name, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.string :image, null: false
      t.string :ingredient
      t.integer :like_count, default: 0
      t.integer :dislike_count, default: 0
      t.string :genre
      t.string :store, null: false
      t.string :country, null: false
      t.boolean :status, null: false, default: true

      t.timestamps
    end
    add_index :hotsnacks, :item_uuid, unique: true
  end
end
