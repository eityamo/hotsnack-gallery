# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_28_061247) do

  create_table "areas", force: :cascade do |t|
    t.boolean "all", default: true, null: false
    t.boolean "hokkaido", default: false, null: false
    t.boolean "tohoku", default: false, null: false
    t.boolean "kanto", default: false, null: false
    t.boolean "chubu", default: false, null: false
    t.boolean "kinki", default: false, null: false
    t.boolean "chugoku", default: false, null: false
    t.boolean "shikoku", default: false, null: false
    t.boolean "kyushu", default: false, null: false
    t.boolean "okinawa", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hotsnack_areas", force: :cascade do |t|
    t.integer "hotsnack_id", null: false
    t.integer "area_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["area_id"], name: "index_hotsnack_areas_on_area_id"
    t.index ["hotsnack_id"], name: "index_hotsnack_areas_on_hotsnack_id"
  end

  create_table "hotsnacks", force: :cascade do |t|
    t.string "item_uuid", null: false
    t.string "name", null: false
    t.integer "price", null: false
    t.text "description", null: false
    t.string "image", null: false
    t.string "ingredient"
    t.integer "like_count", default: 0
    t.integer "dislike_count", default: 0
    t.string "genre"
    t.string "store", null: false
    t.string "country", null: false
    t.boolean "status", default: true, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_uuid"], name: "index_hotsnacks_on_item_uuid", unique: true
  end

  add_foreign_key "hotsnack_areas", "areas"
  add_foreign_key "hotsnack_areas", "hotsnacks"
end
