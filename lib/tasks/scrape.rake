namespace :scrape do
  require 'csv'

  desc "セブン-イレブンのホットスナックをスクレイピング"
  task seven_eleven: :environment do
    Scrapers::SevenElevenScraper.new.call
  end

  desc "ローソンのホットスナックをスクレイピング"
  task lawson: :environment do
    Scrapers::LawsonScraper.new.call
  end

  desc "ファミリーマートのホットスナックをスクレイピング"
  task familymart: :environment do
    Scrapers::FamilymartScraper.new.call
  end

  desc "全ストアのホットスナックをスクレイピング"
  task all: :environment do
    Scrapers::SevenElevenScraper.new.call
    Scrapers::LawsonScraper.new.call
    Scrapers::FamilymartScraper.new.call
  end

  desc "既存 hotsnack.csv を残しつつ、スクレイプ結果を上書き/追加"
  task merge_to_seed_csv: :environment do
    headers = %w[id item_uuid name price description image ingredient genre store country]
    output_path = Rails.root.join('db/fixtures/csv/hotsnack.csv')
    rows_by_id = {}

    parse_price = lambda do |value|
      digits = value.to_s.gsub(/[^\d]/, '')
      digits.empty? ? nil : digits.to_i
    end

    # 既存seed CSVを読み込んで保持
    if File.exist?(output_path)
      CSV.foreach(output_path, headers: true, encoding: 'bom|utf-8') do |row|
        id = row['id'].to_i
        next if id.zero?

        rows_by_id[id] = {
          id: id,
          item_uuid: row['item_uuid'].to_s,
          name: row['name'].to_s,
          price: parse_price.call(row['price']) || 0,
          description: row['description'].to_s,
          image: row['image'].to_s,
          ingredient: row['ingredient'].to_s,
          genre: row['genre'].to_s,
          store: row['store'].to_s,
          country: row['country'].to_s
        }
      end
    end

    upsert = lambda do |id:, item_uuid:, name:, price:, description:, image:, store:, country:|
      current = rows_by_id[id] || {
        id: id, item_uuid: '', name: '', price: 0, description: '', image: '',
        ingredient: '', genre: '', store: '', country: ''
      }

      current[:item_uuid] = item_uuid.to_s unless item_uuid.to_s.empty?
      current[:name] = name.to_s unless name.to_s.empty?
      current[:price] = price unless price.nil?
      current[:description] = description.to_s unless description.to_s.empty?
      current[:image] = image.to_s unless image.to_s.empty?
      current[:store] = store.to_s unless store.to_s.empty?
      current[:country] = country.to_s unless country.to_s.empty?

      rows_by_id[id] = current
    end

    seven_path = Rails.root.join('db/fixtures/csv/seven_eleven/hotsnack_v1.csv')
    CSV.foreach(seven_path, headers: false, encoding: 'bom|utf-8') do |row|
      id = row[0].to_i
      next if id.zero?
      upsert.call(
        id: id,
        item_uuid: row[1],
        name: row[2],
        price: parse_price.call(row[3]),
        description: row[4],
        image: row[5],
        store: 'セブン-イレブン',
        country: row[6].to_s.strip.empty? ? '日本' : row[6].to_s.strip
      )
    end

    lawson_path = Rails.root.join('db/fixtures/csv/lawson/hotsnack_v1.csv')
    CSV.foreach(lawson_path, headers: false, encoding: 'bom|utf-8') do |row|
      id = row[0].to_i
      next if id.zero?
      upsert.call(
        id: id,
        item_uuid: row[1],
        name: row[2],
        price: parse_price.call(row[3]),
        description: row[4],
        image: row[5],
        store: 'LAWSON',
        country: '日本'
      )
    end

    familymart_path = Rails.root.join('db/fixtures/csv/familymart/hotsnack_v1.csv')
    CSV.foreach(familymart_path, headers: false, encoding: 'bom|utf-8') do |row|
      id = row[0].to_i
      next if id.zero?
      upsert.call(
        id: id,
        item_uuid: row[1],
        name: row[2],
        price: parse_price.call(row[3]),
        description: row[4],
        image: row[5],
        store: 'FamilyMart',
        country: '日本'
      )
    end

    bom = %w[EF BB BF].map { |e| e.hex.chr }.join
    csv_file = CSV.generate(bom) do |csv|
      csv << headers
      rows_by_id.keys.sort.each do |id|
        row = rows_by_id[id]
        csv << headers.map { |h| row[h.to_sym] }
      end
    end

    File.open(output_path, 'w') { |f| f.write(csv_file.force_encoding('UTF-8')) }
    puts "Merged seed CSV: #{output_path} (#{rows_by_id.size} items)"
  end

  desc "スクレイピング -> 既存保持でseed CSV更新"
  task refresh_seed_csv: :environment do
    Rake::Task['scrape:all'].invoke
    Rake::Task['scrape:merge_to_seed_csv'].invoke
  end
end
