require 'csv'

csv = CSV.read('db/fixtures/csv/hotsnack.csv', headers: true)
csv.each do |hotsnack|
  Hotsnack.seed do |s|
    s.id = hotsnack[0]
    s.item_uuid = hotsnack[1]
    s.name = hotsnack[2]
    s.price = hotsnack[3]
    s.description = hotsnack[4]
    s.image = hotsnack[5]
    s.ingredient = hotsnack[6]
    s.genre = hotsnack[7]
    s.store = hotsnack[8]
    s.country = hotsnack[9]
  end
end
