class CreateAreas < ActiveRecord::Migration[6.1]
  def change
    create_table :areas do |t|
      t.boolean :hokkaido, null: false, default: false
      t.boolean :tohoku, null: false, default: false
      t.boolean :kanto, null: false, default: false
      t.boolean :koshinetsu, null: false, default: false
      t.boolean :hokuriku, null: false, default: false
      t.boolean :tokai, null: false, default: false
      t.boolean :kinki, null: false, default: false
      t.boolean :chugoku, null: false, default: false
      t.boolean :shikoku, null: false, default: false
      t.boolean :kyushu, null: false, default: false
      t.boolean :okinawa, null: false, default: false

      t.timestamps
    end
  end
end
